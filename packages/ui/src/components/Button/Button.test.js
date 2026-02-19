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
var react_2 = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Button_1 = require("./Button");
(0, vitest_1.describe)('Button', function () {
    (0, vitest_1.it)('should render', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Button_1.Button>Test</Button_1.Button>).getByText;
        getByText('Test');
    });
    (0, vitest_1.it)('should render the loading state', function () {
        var getByRole = (0, testHelpers_1.renderWithTheme)(<Button_1.Button loading>Test</Button_1.Button>).getByRole;
        var loadingIcon = getByRole('progressbar');
        (0, vitest_1.expect)(loadingIcon).toBeInTheDocument();
    });
    (0, vitest_1.it)('should render the HelpIcon when tooltipText is true', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<Button_1.Button disabled tooltipText="Test">
        Test
      </Button_1.Button>).getByTestId;
        var helpIcon = getByTestId('HelpOutlineIcon');
        (0, vitest_1.expect)(helpIcon).toBeInTheDocument();
    });
    (0, vitest_1.it)('should be disabled if loading', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<Button_1.Button loading>Test</Button_1.Button>).getByTestId;
        var button = getByTestId('button');
        (0, vitest_1.expect)(button).toBeDisabled();
    });
    (0, vitest_1.it)('should have the aria-disabled attribute, instead of disabled attribute', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<Button_1.Button disabled>Test</Button_1.Button>).getByTestId;
        var button = getByTestId('button');
        (0, vitest_1.expect)(button).not.toHaveAttribute('disabled');
        (0, vitest_1.expect)(button).toHaveAttribute('aria-disabled', 'true');
    });
    (0, vitest_1.it)('should display the tooltip if disabled and tooltipText is true', function () { return __awaiter(void 0, void 0, void 0, function () {
        var getByTestId, button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getByTestId = (0, testHelpers_1.renderWithTheme)(<Button_1.Button disabled tooltipText="Test tooltip">
        Test
      </Button_1.Button>).getByTestId;
                    button = getByTestId('button');
                    (0, vitest_1.expect)(button).toHaveAttribute('aria-describedby', 'button-tooltip');
                    react_1.fireEvent.mouseOver(button);
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            (0, vitest_1.expect)(react_1.screen.getByRole('tooltip')).toBeInTheDocument();
                        })];
                case 1:
                    _a.sent();
                    (0, vitest_1.expect)(react_1.screen.getByText('Test tooltip')).toBeVisible();
                    return [2 /*return*/];
            }
        });
    }); });
});
