"use strict";
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
var user_event_1 = require("@testing-library/user-event");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Select_1 = require("./Select");
var options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
];
(0, vitest_1.describe)('Select', function () {
    (0, vitest_1.it)('renders a Select with a label and options', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onChange, _a, getByRole, getByText, select, selectInput;
        return __generator(this, function (_b) {
            onChange = vitest_1.vi.fn();
            _a = (0, testHelpers_1.renderWithTheme)(<Select_1.Select label="My Select" onChange={onChange} options={options} placeholder="Select something!"/>), getByRole = _a.getByRole, getByText = _a.getByText;
            select = getByRole('combobox');
            (0, vitest_1.expect)(select).toHaveAttribute('aria-autocomplete', 'list');
            (0, vitest_1.expect)(select).toHaveAttribute('aria-expanded', 'false');
            (0, vitest_1.expect)(select).toHaveAttribute('placeholder', 'Select something!');
            (0, vitest_1.expect)(select).toHaveAttribute('readOnly');
            (0, vitest_1.expect)(getByText('My Select')).toBeInTheDocument();
            (0, vitest_1.expect)(getByRole('button', { name: 'Open' })).toBeInTheDocument();
            selectInput = getByRole('combobox');
            options.forEach(function (option) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, user_event_1.default.click(selectInput)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, user_event_1.default.type(selectInput, option.label)];
                        case 2:
                            _a.sent();
                            (0, vitest_1.expect)(getByText(option.label)).toBeInTheDocument();
                            (0, vitest_1.expect)(selectInput).toHaveValue(option.label);
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.it)('can have its label visually hidden', function () { return __awaiter(void 0, void 0, void 0, function () {
        var container, label;
        return __generator(this, function (_a) {
            container = (0, testHelpers_1.renderWithTheme)(<Select_1.Select hideLabel label="My Select" options={options}/>).container;
            label = container.querySelector('[data-qa-textfield-label="My Select"]');
            (0, vitest_1.expect)(label === null || label === void 0 ? void 0 : label.parentElement).toHaveClass('visually-hidden');
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.it)('can be clearable', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onChange, _a, container, getByRole, select, clearButton;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    onChange = vitest_1.vi.fn();
                    _a = (0, testHelpers_1.renderWithTheme)(<Select_1.Select clearable isOptionEqualToValue={function (option, value) {
                            return option.value === value.value && option.label === value.label;
                        }} label="My Select" onChange={onChange} options={options} value={{
                            label: options[0].label,
                            value: options[0].value,
                        }}/>), container = _a.container, getByRole = _a.getByRole;
                    select = getByRole('combobox');
                    (0, vitest_1.expect)(select).toHaveValue(options[0].label);
                    clearButton = container.querySelector('.MuiAutocomplete-clearIndicator');
                    (0, vitest_1.expect)(clearButton).toBeInTheDocument();
                    return [4 /*yield*/, user_event_1.default.click(clearButton)];
                case 1:
                    _b.sent();
                    (0, vitest_1.expect)(onChange).toHaveBeenCalledWith(vitest_1.expect.any(Object), null);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('features helper text', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Select_1.Select helperText="Helper text" label="My Select" options={options}/>).getByText;
        (0, vitest_1.expect)(getByText('Helper text')).toBeInTheDocument();
    });
    (0, vitest_1.it)('features error text', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Select_1.Select errorText="Error text" label="My Select" options={options}/>).getByText;
        (0, vitest_1.expect)(getByText('Error text')).toBeInTheDocument();
    });
    (0, vitest_1.it)('features loading state', function () {
        var getByRole = (0, testHelpers_1.renderWithTheme)(<Select_1.Select label="My Select" loading options={options}/>).getByRole;
        (0, vitest_1.expect)(getByRole('progressbar', { name: 'Content is loading' })).toBeInTheDocument();
    });
    (0, vitest_1.it)('features a required state', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Select_1.Select label="My Select" options={options} required/>).getByText;
        (0, vitest_1.expect)(getByText('(required)')).toBeInTheDocument();
    });
    (0, vitest_1.it)('features a searchable state', function () {
        var getByRole = (0, testHelpers_1.renderWithTheme)(<Select_1.Select label="My Select" options={options} searchable/>).getByRole;
        var select = getByRole('combobox');
        (0, vitest_1.expect)(select).not.toHaveAttribute('readOnly');
    });
});
