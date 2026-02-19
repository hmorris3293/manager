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
var react_1 = require("@testing-library/react");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var InputAdornment_1 = require("../InputAdornment");
var TextField_1 = require("./TextField");
(0, vitest_1.describe)('TextField', function () {
    var props = {
        label: 'Username',
        value: 'jane-doe',
    };
    (0, vitest_1.it)('Renders a TextField with the given label and initial value', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField {...props}/>), getByDisplayValue = _a.getByDisplayValue, getByText = _a.getByText;
        (0, vitest_1.expect)(getByText('Username')).toBeInTheDocument();
        (0, vitest_1.expect)(getByDisplayValue('jane-doe')).toBeInTheDocument();
    });
    (0, vitest_1.it)('Trims leading and trailing whitespace from a TextField with a trimmed prop', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, getByDisplayValue, getByLabelText, input;
        return __generator(this, function (_b) {
            _a = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField trimmed {...props}/>), getByDisplayValue = _a.getByDisplayValue, getByLabelText = _a.getByLabelText;
            input = getByLabelText('Username');
            react_1.fireEvent.change(input, { target: { value: ' test ' } });
            react_1.fireEvent.blur(input); // Triggers trim
            (0, vitest_1.expect)(getByDisplayValue('test', {
                normalizer: (0, react_1.getDefaultNormalizer)({ trim: false }), // Prevent default trim by DOM Testing Library
            })).toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.it)('Does not trim leading and trailing whitespace from a TextField without "trimmed" prop', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, getByDisplayValue, getByLabelText, input;
        return __generator(this, function (_b) {
            _a = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField {...props}/>), getByDisplayValue = _a.getByDisplayValue, getByLabelText = _a.getByLabelText;
            input = getByLabelText('Username');
            react_1.fireEvent.change(input, { target: { value: ' test ' } });
            react_1.fireEvent.blur(input);
            (0, vitest_1.expect)(getByDisplayValue(' test ', {
                normalizer: (0, react_1.getDefaultNormalizer)({ trim: false }),
            })).toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.it)('Renders an error message on error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getByText;
        return __generator(this, function (_a) {
            getByText = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField error errorText="There was an error" {...props}/>).getByText;
            (0, vitest_1.expect)(getByText(/There was an error/i)).toBeInTheDocument();
            return [2 /*return*/];
        });
    }); });
    (0, vitest_1.it)('can change the input type and renders an input adornment', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField InputProps={{
                startAdornment: <InputAdornment_1.InputAdornment position="end">$</InputAdornment_1.InputAdornment>,
            }} label={'Money'} type={'number'} value={'100'}/>), getByDisplayValue = _a.getByDisplayValue, getByTestId = _a.getByTestId, getByText = _a.getByText;
        (0, vitest_1.expect)(getByText('Money')).toBeInTheDocument();
        (0, vitest_1.expect)(getByDisplayValue('100')).toBeInTheDocument();
        (0, vitest_1.expect)(getByText('$')).toBeInTheDocument();
        var input = getByTestId('textfield-input');
        (0, vitest_1.expect)(input === null || input === void 0 ? void 0 : input.getAttribute('type')).toBe('number');
    });
    (0, vitest_1.it)('accepts a min and max value for a type of number and clamps the value within the range', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField label={'Money'} max={10} min={2} type={'number'} value={'5'}/>).getByTestId;
        var input = getByTestId('textfield-input');
        (0, vitest_1.expect)(input === null || input === void 0 ? void 0 : input.getAttribute('value')).toBe('5');
        react_1.fireEvent.change(input, { target: { value: '50' } });
        (0, vitest_1.expect)(input === null || input === void 0 ? void 0 : input.getAttribute('value')).toBe('10');
        react_1.fireEvent.change(input, { target: { value: '1' } });
        (0, vitest_1.expect)(input === null || input === void 0 ? void 0 : input.getAttribute('value')).toBe('2');
    });
    (0, vitest_1.it)('renders a helper text with an input id', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField helperText="Helper text" inputId="input-id" label=""/>).getByText;
        (0, vitest_1.expect)(getByText('Helper text')).toBeInTheDocument();
        var helperText = getByText('Helper text');
        (0, vitest_1.expect)(helperText.getAttribute('id')).toBe('input-id-helper-text');
    });
    (0, vitest_1.it)('renders a helper text with a label', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField helperText="Helper text" label="Label"/>).getByText;
        var helperText = getByText('Helper text');
        (0, vitest_1.expect)(helperText).toBeInTheDocument();
        (0, vitest_1.expect)(helperText.getAttribute('id')).toBe('label-helper-text');
    });
    (0, vitest_1.it)('renders a helper text with a fallback id', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<TextField_1.TextField helperText="Helper text" label=""/>).getByText;
        var helperText = getByText('Helper text');
        // ':rg:' being the default react generated id
        (0, vitest_1.expect)(helperText.getAttribute('id')).toBe(':rg:-helper-text');
    });
});
