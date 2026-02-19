"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatEventSeconds = exports.generateMigrationTimeString = exports.convertMinutesTo = void 0;
var pluralize_1 = require("./pluralize");
/**
 *
 * @param minutes minutes to convert
 * @param conversion what unit you want the minutes converted to
 * @param includeRemainer whether or not you want the remainder of minutes after conversion
 * For example, if you want the hours and minutes after converting minutes to hours
 *
 * @returns comma-seperated strings of your converted unit of time. If you did not
 * include the remainder, it will just be one number as a string.
 *
 * @example
 *
 * console.log(convertMinutesTo(140, 'hours', true)) // "2,20"
 * console.log(convertMinutesTo(140, 'hours', false)) // "2"
 */
var convertMinutesTo = function (minutes, conversion, includeRemainder) {
    if (includeRemainder === void 0) { includeRemainder = false; }
    if (conversion === 'hours') {
        return includeRemainder
            ? "".concat(Math.floor(minutes / 60), ",").concat(minutes % 60)
            : "".concat(Math.floor(minutes / 60));
    }
    /** otherwise convert to days */
    return includeRemainder
        ? "".concat(Math.floor(minutes / 1440), ",").concat(minutes % 1440)
        : "".concat(Math.floor(minutes / 1440));
};
exports.convertMinutesTo = convertMinutesTo;
/**
 *
 * @param migrationTimeInMins time in minutes you'd like to convert into
 * a human-readable string
 *
 * This should be used in conjunction with the function above it.
 */
var generateMigrationTimeString = function (migrationTimeInMins) {
    /** if the migration is 1 day or more */
    if (migrationTimeInMins >= 1440) {
        var daysAndMinutes = (0, exports.convertMinutesTo)(migrationTimeInMins, 'days', true).split(',');
        if (+daysAndMinutes[1] >= 60) {
            var _a = (0, exports.convertMinutesTo)(+daysAndMinutes[1], 'hours', true).split(','), hours = _a[0], minutes = _a[1];
            return "".concat((0, pluralize_1.pluralize)('day', 'days', +daysAndMinutes[0]), ", ").concat((0, pluralize_1.pluralize)('hour', 'hours', +hours), ", and ").concat((0, pluralize_1.pluralize)('minute', 'minutes', +minutes));
        }
        return "".concat((0, pluralize_1.pluralize)('day', 'days', +daysAndMinutes[0]), " and ").concat((0, pluralize_1.pluralize)('minute', 'minutes', +daysAndMinutes[1]));
    }
    /** if migration time is 1 hour or more */
    if (migrationTimeInMins >= 60) {
        var hoursAndMinutes = (0, exports.convertMinutesTo)(migrationTimeInMins, 'hours', true).split(',');
        return "".concat((0, pluralize_1.pluralize)('hour', 'hours', +hoursAndMinutes[0]), " and ").concat((0, pluralize_1.pluralize)('minute', 'minutes', +hoursAndMinutes[1]));
    }
    return (0, pluralize_1.pluralize)('minute', 'minutes', migrationTimeInMins);
};
exports.generateMigrationTimeString = generateMigrationTimeString;
var formatEventSeconds = function (seconds) {
    if (!seconds) {
        return ''; // Show nothing if we don't know a duration
    }
    if (seconds >= 3600) {
        var hours = Math.floor(seconds / 60 / 60);
        var minutes = Math.floor((seconds % 3600) / 60);
        return minutes === 0
            ? "".concat((0, pluralize_1.pluralize)('hour', 'hours', hours))
            : "".concat((0, pluralize_1.pluralize)('hour', 'hours', hours), ", ").concat((0, pluralize_1.pluralize)('minute', 'minutes', minutes));
    }
    if (seconds >= 60) {
        var minutes = Math.floor(seconds / 60);
        var secs = Math.floor(seconds % 60);
        return secs === 0
            ? "".concat((0, pluralize_1.pluralize)('minute', 'minutes', minutes))
            : "".concat((0, pluralize_1.pluralize)('minute', 'minutes', minutes), ", ").concat((0, pluralize_1.pluralize)('second', 'seconds', secs));
    }
    return "".concat((0, pluralize_1.pluralize)('second', 'seconds', seconds));
};
exports.formatEventSeconds = formatEventSeconds;
