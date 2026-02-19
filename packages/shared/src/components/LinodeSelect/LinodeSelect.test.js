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
var utilities_1 = require("@linode/utilities");
var react_1 = require("@testing-library/react");
var user_event_1 = require("@testing-library/user-event");
var react_2 = require("react");
var vitest_1 = require("vitest");
var wrap_1 = require("../../utilities/wrap");
var LinodeSelect_1 = require("./LinodeSelect");
var TEXTFIELD_ID = 'textfield-input';
(0, vitest_1.describe)('LinodeSelect', function () {
    (0, vitest_1.test)('should display custom no options message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customNoOptionsMessage, options, onSelectionChange, screen, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customNoOptionsMessage = 'Custom No Options Message';
                    options = [];
                    onSelectionChange = vitest_1.vi.fn();
                    screen = (0, wrap_1.renderWithWrappers)(<LinodeSelect_1.LinodeSelect multiple={false} noOptionsMessage={customNoOptionsMessage} // Pass the custom message via prop
                     onSelectionChange={onSelectionChange} options={options} value={null}/>, [(0, wrap_1.QueryClientWrapper)(), (0, wrap_1.ThemeWrapper)()]);
                    input = screen.getByTestId(TEXTFIELD_ID);
                    // Open the dropdown
                    return [4 /*yield*/, user_event_1.default.click(input)];
                case 1:
                    // Open the dropdown
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            // The custom no options message should be displayed when there are no options available
                            (0, vitest_1.expect)(screen.getByText(customNoOptionsMessage)).toBeInTheDocument();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('should display default no options message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var option, onSelectionChange, screen, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    option = [];
                    onSelectionChange = vitest_1.vi.fn();
                    screen = (0, wrap_1.renderWithWrappers)(<LinodeSelect_1.LinodeSelect multiple={false} onSelectionChange={onSelectionChange} options={option} value={null}/>, [(0, wrap_1.QueryClientWrapper)(), (0, wrap_1.ThemeWrapper)()]);
                    input = screen.getByTestId(TEXTFIELD_ID);
                    return [4 /*yield*/, user_event_1.default.click(input)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            // The default no options message should be displayed when noOptionsMessage prop is not provided
                            (0, vitest_1.expect)(screen.getByText('No available Linodes')).toBeInTheDocument();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('should display no options message when user input does not match', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customNoOptionsMessage, option, onSelectionChange, screen, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customNoOptionsMessage = 'Custom No Options Message';
                    option = [];
                    onSelectionChange = vitest_1.vi.fn();
                    screen = (0, wrap_1.renderWithWrappers)(<LinodeSelect_1.LinodeSelect multiple={false} noOptionsMessage={customNoOptionsMessage} onSelectionChange={onSelectionChange} options={option} value={null}/>, [(0, wrap_1.QueryClientWrapper)(), (0, wrap_1.ThemeWrapper)()]);
                    input = screen.getByTestId(TEXTFIELD_ID);
                    // Open the dropdown
                    return [4 /*yield*/, user_event_1.default.click(input)];
                case 1:
                    // Open the dropdown
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, vitest_1.expect)(screen.getByText(customNoOptionsMessage)).toBeInTheDocument();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('should display no options message when user input does not match an option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customNoOptionsMessage, option, onSelectionChange, screen, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customNoOptionsMessage = 'Custom No Options Message';
                    option = utilities_1.linodeFactory.build({ id: 1, label: 'Linode 1' });
                    onSelectionChange = vitest_1.vi.fn();
                    screen = (0, wrap_1.renderWithWrappers)(<LinodeSelect_1.LinodeSelect multiple={false} noOptionsMessage={customNoOptionsMessage} onSelectionChange={onSelectionChange} options={[option]} value={null}/>, [(0, wrap_1.QueryClientWrapper)(), (0, wrap_1.ThemeWrapper)()]);
                    input = screen.getByTestId(TEXTFIELD_ID);
                    return [4 /*yield*/, user_event_1.default.type(input, 'Linode 2')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, vitest_1.expect)(screen.getByText(customNoOptionsMessage)).toBeInTheDocument();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.test)('should not display no options message when user input matches an option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var customNoOptionsMessage, option, onSelectionChange, screen, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customNoOptionsMessage = 'Custom No Options Message';
                    option = utilities_1.linodeFactory.build({ id: 1, label: 'Linode 1' });
                    onSelectionChange = vitest_1.vi.fn();
                    screen = (0, wrap_1.renderWithWrappers)(<LinodeSelect_1.LinodeSelect multiple={false} noOptionsMessage={customNoOptionsMessage} onSelectionChange={onSelectionChange} options={[option]} value={null}/>, [(0, wrap_1.QueryClientWrapper)(), (0, wrap_1.ThemeWrapper)()]);
                    input = screen.getByTestId(TEXTFIELD_ID);
                    // The custom no options message should not be displayed when user input matches an option
                    return [4 /*yield*/, user_event_1.default.type(input, 'Linode 1')];
                case 1:
                    // The custom no options message should not be displayed when user input matches an option
                    _a.sent();
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, vitest_1.expect)(screen.queryByText(customNoOptionsMessage)).not.toBeInTheDocument();
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
