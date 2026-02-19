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
exports.TimeZoneSelect = void 0;
var ui_1 = require("@linode/ui");
var luxon_1 = require("luxon");
var react_1 = require("react");
var timezones_1 = require("../../utilities/timezones");
var getOptionLabel = function (_a) {
    var label = _a.label, offset = _a.offset;
    var minutes = (Math.abs(offset) % 60).toLocaleString(undefined, {
        minimumIntegerDigits: 2,
        useGrouping: false,
    });
    var hours = Math.floor(Math.abs(offset) / 60);
    var isPositive = Math.abs(offset) === offset ? '+' : '-';
    return "(GMT ".concat(isPositive).concat(hours, ":").concat(minutes, ") ").concat(label);
};
var getTimezoneOptions = function () {
    return timezones_1.timezones
        .map(function (tz) {
        var offset = luxon_1.DateTime.now().setZone(tz.name).offset;
        var label = getOptionLabel(__assign(__assign({}, tz), { offset: offset }));
        return { label: label, offset: offset, value: tz.name };
    })
        .sort(function (a, b) { return a.offset - b.offset; });
};
var timezoneOptions = getTimezoneOptions();
var TimeZoneSelect = function (_a) {
    var _b;
    var _c = _a.disabled, disabled = _c === void 0 ? false : _c, errorText = _a.errorText, _d = _a.label, label = _d === void 0 ? 'Timezone' : _d, _e = _a.noMarginTop, noMarginTop = _e === void 0 ? false : _e, onChange = _a.onChange, value = _a.value;
    return (<ui_1.Autocomplete autoHighlight disabled={disabled} errorText={errorText} keepSearchEnabledOnMobile label={label} noMarginTop={noMarginTop} onChange={function (e, option) { return onChange((option === null || option === void 0 ? void 0 : option.value) || ''); }} options={timezoneOptions} placeholder="Choose a Timezone" sx={{ flex: 2 }} value={(_b = timezoneOptions.find(function (option) { return option.value === value; })) !== null && _b !== void 0 ? _b : undefined}/>);
};
exports.TimeZoneSelect = TimeZoneSelect;
