"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStorageUnit = exports.StorageUnitExponents = exports.convertBytesToTarget = exports.determinePower = exports.readableBytes = exports.convertMegabytesTo = void 0;
var convertMegabytesTo = function (data, removeDecimals) {
    // API v4 always returns nodebalancer transfer in MB, so we want to clean it up if it's too
    // big or too small
    var gb = 1073741824;
    var mb = 1048576;
    var kb = 1024;
    var totalToBytes = data * 1024 * 1024; // convert the MB to Bytes
    if (totalToBytes >= gb) {
        // convert bytes to GB
        return removeDecimals
            ? "".concat(totalToBytes / gb, " GB")
            : "".concat((totalToBytes / gb).toFixed(2), " GB");
    }
    if (totalToBytes >= mb) {
        // convert bytes to MB
        return "".concat((((totalToBytes / mb) * 100) / 100).toFixed(2), " MB");
    }
    if (totalToBytes >= kb) {
        // convert bytes to KB
        return "".concat((((totalToBytes / kb) * 100) / 100).toFixed(2), " KB");
    }
    return "".concat(totalToBytes, " bytes");
};
exports.convertMegabytesTo = convertMegabytesTo;
// This code inspired by: https://ourcodeworld.com/articles/read/713/converting-bytes-to-human-readable-values-kb-mb-gb-tb-pb-eb-zb-yb-with-javascript
/**
 * Converts raw bytes to human-readable format using base2 calculations (1024-based)
 * while displaying using common units (KB/MB/GB/TB).
 *
 * IMPORTANT: We intentionally use base2 calculations (1024 bytes = 1 KB) even though
 * we display using traditional storage units. This aligns with industry practice. Internally these represent GiB, TiB, PiB values
 * despite the displayed labels.
 *
 * To use base10 calculations (1000-based), set the base10 option to true.
 * By default, calculations use base2 (1024-based).
 *
 * See: https://techdocs.akamai.com/cloud-computing/docs/understanding-how-billing-works#storage-units
 *
 * @param num - The number of bytes to convert.
 * @param options - Options for the conversion.
 * @returns An object containing the formatted value, unit, and value.
 */
var readableBytes = function (num, options) {
    var _a;
    if (options === void 0) { options = {}; }
    // These are the units Classic uses. This can easily be extended –
    // just keep adding to this array and the corresponding interface.
    var storageUnits = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    // If we've been given custom unit labels, make the substitution here.
    if (options.unitLabels) {
        Object.keys(options.unitLabels).forEach(function (originalLabel) {
            var label = originalLabel;
            var idx = storageUnits.indexOf(label);
            if (idx > -1) {
                // The TS compiler wasn't aware of the null check above, so I added
                // the non-null assertion operator on options.unitLabels.
                storageUnits[idx] = options.unitLabels[label];
            }
        });
    }
    // If the value is 0 or invalid, go ahead and return because the subsequent math won't work out
    if (num === 0 ||
        (options.handleNegatives === false && num < 0) ||
        typeof num !== 'number') {
        return {
            formatted: "0 ".concat(storageUnits[0]),
            unit: storageUnits[0],
            value: 0,
        };
    }
    // If the value is a negative number, we're going to need flip
    // the sign, do the math, then add the sign back at the end.
    var isNegative = num < 0;
    if (isNegative) {
        num = -num;
    }
    // If no maxUnit is provided, default to the highest unit
    var power = (0, exports.determinePower)(num, storageUnits, __assign(__assign({}, options), { maxUnit: (_a = options.maxUnit) !== null && _a !== void 0 ? _a : storageUnits[storageUnits.length - 1] }));
    var multiplier = options.base10 ? 1000 : 1024;
    // Some other magic to get the human-readable version
    var result = num / Math.max(Math.pow(multiplier, power), 1);
    var unit = storageUnits[power] || storageUnits[0];
    var decimalPlaces = determineDecimalPlaces(result, unit, options);
    var value = parseFloat(result.toFixed(decimalPlaces));
    // Special case to account for pluralization.
    if ((value === 1 || value === -1) && unit === 'bytes') {
        return {
            formatted: (isNegative ? '-' : '') + value + ' byte',
            unit: 'byte',
            value: isNegative ? -value : value,
        };
    }
    return {
        formatted: (isNegative ? '-' : '') + value + ' ' + unit,
        unit: unit,
        value: isNegative ? -value : value,
    };
};
exports.readableBytes = readableBytes;
// `power` corresponds to storageUnits.indexOf(<UNIT WE WANT TO USE>)
var determinePower = function (num, storageUnits, options) {
    // If maxUnit has been supplied, use that
    if (options.unit) {
        return storageUnits.indexOf(options.unit);
    }
    else {
        var multiplier = options.base10 ? 1000 : 1024;
        // Otherwise, we need to do some magic, which I don't 100% understand
        var magicallyCalculatedPower = Math.floor(Math.log(num) / Math.log(multiplier));
        // If the magically calculated power/unit is higher than the
        // provided maxUnit, use maxUnit instead.
        return options.maxUnit &&
            storageUnits.indexOf(options.maxUnit) < magicallyCalculatedPower
            ? storageUnits.indexOf(options.maxUnit)
            : magicallyCalculatedPower;
    }
};
exports.determinePower = determinePower;
// Determine the number of decimal places to use.
// This could be specified with an option, or we fallback
// to the rounding rules that Classic Manager uses.
var determineDecimalPlaces = function (num, unit, options) {
    if (options === void 0) { options = {}; }
    if (typeof options.round === 'number') {
        return options.round;
    }
    else if (typeof options.round === 'object' &&
        // If rounding rules for the unit we're using have been specified
        typeof options.round[unit] === 'number') {
        return options.round[unit];
    }
    else if (num > 0 && num < 10) {
        return 2;
    }
    else if (num >= 10 && num < 100) {
        return 1;
    }
    else {
        return 0;
    }
};
var convertBytesToTarget = function (unit, value) {
    switch (unit) {
        case 'B':
        case 'byte':
        case 'bytes':
            return value;
        default:
            return (0, exports.convertStorageUnit)('B', value, unit);
    }
};
exports.convertBytesToTarget = convertBytesToTarget;
var StorageUnitExponents;
(function (StorageUnitExponents) {
    StorageUnitExponents[StorageUnitExponents["B"] = 0] = "B";
    StorageUnitExponents[StorageUnitExponents["GB"] = 3] = "GB";
    StorageUnitExponents[StorageUnitExponents["KB"] = 1] = "KB";
    StorageUnitExponents[StorageUnitExponents["MB"] = 2] = "MB";
    StorageUnitExponents[StorageUnitExponents["TB"] = 4] = "TB";
})(StorageUnitExponents || (exports.StorageUnitExponents = StorageUnitExponents = {}));
/**
 * Converts from one storage unit to another.
 *
 * @param sourceUnit - The storage unit to convert the quantity from
 * @param sourceQuantity - The quantity to covert
 * @param targetUnit - The storage unit to convert the quantity to
 */
var convertStorageUnit = function (sourceUnit, sourceQuantity, targetUnit) {
    if (sourceQuantity === undefined) {
        return 0;
    }
    if (sourceUnit === targetUnit) {
        return sourceQuantity;
    }
    var BASE = 1024;
    var exponent = StorageUnitExponents[sourceUnit] - StorageUnitExponents[targetUnit];
    return sourceQuantity * Math.pow(BASE, exponent);
};
exports.convertStorageUnit = convertStorageUnit;
