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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
var luxon_1 = require("luxon");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../../utilities/testHelpers");
var DateTimeRangePicker_1 = require("./DateTimeRangePicker");
// Mock current date for consistency
var mockDate = luxon_1.DateTime.fromISO('2025-02-04T12:00:00.000Z').setZone('UTC');
var defaultProps = {
    endDateProps: {
        label: 'End Date',
    },
    onApply: vitest_1.vi.fn(),
    presetsProps: {
        enablePresets: true,
    },
    startDateProps: {
        label: 'Start Date',
        value: mockDate,
    },
};
(0, vitest_1.describe)('DateTimeRangePicker', function () {
    (0, vitest_1.it)('should render the DateTimeRangePicker component with the correct label and placeholder', function () {
        (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps}/>);
        (0, vitest_1.expect)(react_1.screen.getByRole('textbox', {
            name: 'Start Date',
        })).toBeVisible();
        (0, vitest_1.expect)(react_1.screen.getByRole('textbox', {
            name: 'End Date',
        })).toBeVisible();
        (0, vitest_1.expect)(react_1.screen.getByRole('textbox', {
            name: 'Start Date',
        })).toHaveAttribute('placeholder', 'YYYY-MM-DD hh:mm aa');
        (0, vitest_1.expect)(react_1.screen.getByRole('textbox', {
            name: 'End Date',
        })).toHaveAttribute('placeholder', 'YYYY-MM-DD hh:mm aa');
    });
    (0, vitest_1.it)('should open the Popover when the Start Date field is clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
        var textField;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps}/>);
                    textField = react_1.screen.getByRole('textbox', { name: 'Start Date' });
                    return [4 /*yield*/, user_event_1.default.click(textField)];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(react_1.screen.getByRole('dialog')).toBeVisible(); // Popover should be open
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('should call onCancel when the Cancel button is clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps}/>);
                    return [4 /*yield*/, user_event_1.default.click(react_1.screen.getByRole('textbox', { name: 'Start Date' }))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, user_event_1.default.click(react_1.screen.getByRole('button', { name: 'Cancel' }))];
                case 2:
                    _a.sent();
                    (0, vitest_1.expect)(react_1.screen.queryByRole('dialog')).toBeNull(); // Popover should be closed
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('should display error text when provided', function () {
        var props = __assign(__assign({}, defaultProps), { startDateProps: __assign(__assign({}, defaultProps.startDateProps), { errorMessage: 'Invalid date' }) });
        (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...props}/>);
        (0, vitest_1.expect)(react_1.screen.getByRole('alert')).toBeVisible();
    });
    (0, vitest_1.describe)('DateTimeRangePicker - Format Validation', function () {
        var formats = [
            'MM/dd/yyyy HH:mm',
            'MM/dd/yyyy hh:mm a',
            'dd-MM-yyyy HH:mm',
            'dd-MM-yyyy hh:mm a',
            'yyyy-MM-dd HH:mm',
            'yyyy-MM-dd hh:mm a',
        ];
        var expectedPlaceholderValues = {
            'MM/dd/yyyy HH:mm': 'MM/DD/YYYY hh:mm',
            'MM/dd/yyyy hh:mm a': 'MM/DD/YYYY hh:mm aa',
            'dd-MM-yyyy HH:mm': 'DD-MM-YYYY hh:mm',
            'dd-MM-yyyy hh:mm a': 'DD-MM-YYYY hh:mm aa',
            'yyyy-MM-dd HH:mm': 'YYYY-MM-DD hh:mm',
            'yyyy-MM-dd hh:mm a': 'YYYY-MM-DD hh:mm aa',
        };
        formats.forEach(function (format) {
            (0, vitest_1.it)("should accept and display dates correctly in ".concat(format, " format"), function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps} format={format}/>);
                    (0, vitest_1.expect)(react_1.screen.getByRole('textbox', { name: 'Start Date' })).toHaveAttribute('placeholder', expectedPlaceholderValues[format]);
                    (0, vitest_1.expect)(react_1.screen.getByRole('textbox', { name: 'End Date' })).toHaveAttribute('placeholder', expectedPlaceholderValues[format]);
                    return [2 /*return*/];
                });
            }); });
        });
        (0, vitest_1.it)('should prevent invalid date input for each format', function () { return __awaiter(void 0, void 0, void 0, function () {
            var startDateField;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps} format="yyyy-MM-dd hh:mm a"/>);
                        startDateField = react_1.screen.getByRole('textbox', {
                            name: 'Start Date',
                        });
                        return [4 /*yield*/, user_event_1.default.type(startDateField, 'invalid-date')];
                    case 1:
                        _a.sent();
                        (0, vitest_1.expect)(startDateField).not.toHaveValue('invalid-date');
                        return [2 /*return*/];
                }
            });
        }); });
    });
    (0, vitest_1.describe)('Time and Timezone Selection', function () {
        (0, vitest_1.it)('should allow selecting start and end times', function () { return __awaiter(void 0, void 0, void 0, function () {
            var startTimeField, endTimeField;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps}/>);
                        return [4 /*yield*/, user_event_1.default.click(react_1.screen.getByRole('textbox', { name: 'Start Date' }))];
                    case 1:
                        _a.sent();
                        startTimeField = react_1.screen.getByLabelText(/Start Time/i);
                        endTimeField = react_1.screen.getByLabelText(/End Time/i);
                        return [4 /*yield*/, user_event_1.default.type(startTimeField, '2:00 AM')];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, user_event_1.default.type(endTimeField, '4:00 PM')];
                    case 3:
                        _a.sent();
                        (0, vitest_1.expect)(startTimeField).toHaveValue('02:00 AM');
                        (0, vitest_1.expect)(endTimeField).toHaveValue('04:00 PM');
                        return [2 /*return*/];
                }
            });
        }); });
        (0, vitest_1.it)('should update time correctly when selecting a new timezone', function () { return __awaiter(void 0, void 0, void 0, function () {
            var startDateField, startTimeField, inputElement, optionElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        (0, testHelpers_1.renderWithTheme)(<DateTimeRangePicker_1.DateTimeRangePicker {...defaultProps}/>);
                        startDateField = react_1.screen.getByRole('textbox', {
                            name: 'Start Date',
                        });
                        (0, vitest_1.expect)(startDateField).toHaveValue('2025-02-04 12:00 PM');
                        return [4 /*yield*/, user_event_1.default.click(startDateField)];
                    case 1:
                        _a.sent();
                        (0, vitest_1.expect)(react_1.screen.getByRole('dialog')).toBeVisible();
                        startTimeField = react_1.screen.getByLabelText(/Start Time/i);
                        return [4 /*yield*/, user_event_1.default.type(startTimeField, '12:00 AM')];
                    case 2:
                        _a.sent();
                        (0, vitest_1.expect)(startTimeField).toHaveValue('12:00 AM');
                        inputElement = react_1.screen.getByRole('combobox', { name: 'Timezone' });
                        react_1.fireEvent.focus(inputElement);
                        react_1.fireEvent.keyDown(inputElement, { key: 'ArrowDown' });
                        optionElement = react_1.screen.getByRole('option', {
                            name: '(GMT -10:00) Hawaii-Aleutian Standard Time',
                        });
                        return [4 /*yield*/, user_event_1.default.click(optionElement)];
                    case 3:
                        _a.sent();
                        // Ensure the local time remains the same, but the timezone changes
                        (0, vitest_1.expect)(startTimeField).toHaveValue('12:00 AM');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
