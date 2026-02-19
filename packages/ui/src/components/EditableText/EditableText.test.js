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
var user_event_1 = require("@testing-library/user-event");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var EditableText_1 = require("./EditableText");
var props = {
    onCancel: vitest_1.vi.fn(),
    onEdit: vitest_1.vi.fn(function () { return Promise.resolve(); }),
    text: 'Edit this',
};
var BUTTON_LABEL = 'Edit Edit this';
var CLOSE_BUTTON_ICON = 'CloseIcon';
var SAVE_BUTTON_ICON = 'CheckIcon';
(0, vitest_1.describe)('Editable Text', function () {
    (0, vitest_1.it)('renders an Editable Text input', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props}/>), getByLabelText = _a.getByLabelText, getByText = _a.getByText;
        var text = getByText('Edit this');
        (0, vitest_1.expect)(text).toBeVisible();
        var button = getByLabelText(BUTTON_LABEL);
        (0, vitest_1.expect)(button).toBeInTheDocument();
    });
    (0, vitest_1.it)('shows error text', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props} errorText="this is an error"/>).getByText;
        var errorText = getByText('this is an error');
        (0, vitest_1.expect)(errorText).toBeVisible();
    });
    (0, vitest_1.it)('can switch between a label and a textfield', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props}/>), getByLabelText = _a.getByLabelText, getByTestId = _a.getByTestId, queryByTestId = _a.queryByTestId;
        var button = getByLabelText(BUTTON_LABEL);
        (0, vitest_1.expect)(button).toBeInTheDocument();
        react_1.fireEvent.click(button);
        (0, vitest_1.expect)(button).not.toBeInTheDocument();
        var textfield = getByTestId('textfield-input');
        var saveButton = getByTestId(SAVE_BUTTON_ICON);
        var closeButton = getByTestId(CLOSE_BUTTON_ICON);
        (0, vitest_1.expect)(textfield).toHaveValue('Edit this');
        (0, vitest_1.expect)(saveButton).toBeVisible();
        (0, vitest_1.expect)(closeButton).toBeVisible();
        react_1.fireEvent.click(closeButton);
        (0, vitest_1.expect)(props.onCancel).toHaveBeenCalled();
        // after clicking the cancel icon
        (0, vitest_1.expect)(queryByTestId(CLOSE_BUTTON_ICON)).not.toBeInTheDocument();
        (0, vitest_1.expect)(queryByTestId(SAVE_BUTTON_ICON)).not.toBeInTheDocument();
        (0, vitest_1.expect)(getByLabelText(BUTTON_LABEL)).toBeInTheDocument();
    });
    (0, vitest_1.it)('does not call onEdit if there are no changes to the text', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props}/>), getByLabelText = _a.getByLabelText, getByTestId = _a.getByTestId, queryByTestId = _a.queryByTestId;
        var button = getByLabelText(BUTTON_LABEL);
        (0, vitest_1.expect)(button).toBeInTheDocument();
        react_1.fireEvent.click(button);
        var saveButton = getByTestId(SAVE_BUTTON_ICON);
        (0, vitest_1.expect)(saveButton).toBeVisible();
        react_1.fireEvent.click(saveButton);
        (0, vitest_1.expect)(props.onEdit).not.toHaveBeenCalled();
        // after clicking the save button
        (0, vitest_1.expect)(queryByTestId(CLOSE_BUTTON_ICON)).not.toBeInTheDocument();
        (0, vitest_1.expect)(queryByTestId(SAVE_BUTTON_ICON)).not.toBeInTheDocument();
        (0, vitest_1.expect)(getByLabelText(BUTTON_LABEL)).toBeInTheDocument();
    });
    (0, vitest_1.it)('calls onEdit if the text has been changed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, getByLabelText, getByTestId, button, saveButton, textfield;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props}/>), getByLabelText = _a.getByLabelText, getByTestId = _a.getByTestId;
                    button = getByLabelText(BUTTON_LABEL);
                    (0, vitest_1.expect)(button).toBeInTheDocument();
                    react_1.fireEvent.click(button);
                    saveButton = getByTestId(SAVE_BUTTON_ICON);
                    (0, vitest_1.expect)(saveButton).toBeVisible();
                    textfield = getByTestId('textfield-input');
                    (0, vitest_1.expect)(textfield).toHaveValue('Edit this');
                    return [4 /*yield*/, user_event_1.default.type(textfield, ' has now been edited')];
                case 1:
                    _b.sent();
                    (0, vitest_1.expect)(textfield).toHaveValue('Edit this has now been edited');
                    // saving text
                    react_1.fireEvent.click(saveButton);
                    (0, vitest_1.expect)(props.onEdit).toHaveBeenCalled();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, vitest_1.it)('appends a suffix to the text when provided', function () {
        var _a = (0, testHelpers_1.renderWithTheme)(<EditableText_1.EditableText {...props} textSuffix=" suffix"/>), getByRole = _a.getByRole, getByTestId = _a.getByTestId, getByText = _a.getByText;
        var text = getByText('Edit this suffix');
        (0, vitest_1.expect)(text).toBeVisible();
        var editButton = getByRole('button', { name: BUTTON_LABEL });
        (0, vitest_1.expect)(editButton).toBeInTheDocument();
        react_1.fireEvent.click(editButton);
        var textfield = getByTestId('textfield-input');
        (0, vitest_1.expect)(textfield).toHaveValue('Edit this');
        var closeButton = getByTestId(CLOSE_BUTTON_ICON);
        react_1.fireEvent.click(closeButton);
        (0, vitest_1.expect)(getByText('Edit this suffix')).toBeVisible();
    });
});
