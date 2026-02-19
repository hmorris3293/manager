"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Notice_1 = require("./Notice");
(0, vitest_1.describe)('Notice Component', function () {
    (0, vitest_1.it)('renders without errors with proper spacing', function () {
        var container = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice />).container;
        var notice = container.firstChild;
        (0, vitest_1.expect)(notice).toHaveStyle('margin-bottom: 1rem');
        (0, vitest_1.expect)(notice).toHaveStyle('margin-left: 0');
        (0, vitest_1.expect)(notice).toHaveStyle('margin-top: 0');
    });
    (0, vitest_1.it)('renders with text', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice text="This is a notice"/>).getByText;
        var noticeText = getByText('This is a notice');
        (0, vitest_1.expect)(noticeText).toBeInTheDocument();
    });
    (0, vitest_1.it)('renders with children', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice>This is a notice</Notice_1.Notice>).getByText;
        var noticeText = getByText('This is a notice');
        (0, vitest_1.expect)(noticeText).toBeInTheDocument();
    });
    (0, vitest_1.it)('handles click events', function () {
        var handleClick = vitest_1.vi.fn();
        var getByText = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice onClick={handleClick} text="Click me"/>).getByText;
        var noticeText = getByText('Click me');
        react_1.fireEvent.click(noticeText);
        (0, vitest_1.expect)(handleClick).toHaveBeenCalled();
    });
    (0, vitest_1.it)('applies className prop', function () {
        var container = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice className="custom-class"/>).container;
        (0, vitest_1.expect)(container.firstChild).toHaveClass('custom-class');
    });
    (0, vitest_1.it)('applies a default test-id based on the variant', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice variant="success"/>).getByTestId;
        (0, vitest_1.expect)(getByTestId('notice-success')).toBeInTheDocument();
    });
    (0, vitest_1.it)('applies the dataTestId prop', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice dataTestId="my-custom-test-id" variant="success"/>).getByTestId;
        (0, vitest_1.expect)(getByTestId('my-custom-test-id')).toBeInTheDocument();
    });
    (0, vitest_1.it)('applies variant prop', function () {
        var container = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice variant="error"/>).container;
        (0, vitest_1.expect)(container.firstChild).toHaveStyle('border-left: 4px solid #d63c42;');
        (0, vitest_1.expect)(container.firstChild).toHaveStyle('background: #ffe5e5;');
    });
    (0, vitest_1.it)('handles bypassValidation prop', function () {
        var container = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice bypassValidation/>).container;
        (0, vitest_1.expect)(container.firstChild).not.toHaveClass('error-for-scroll');
    });
    (0, vitest_1.it)('applies spacing props', function () {
        var container = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice spacingBottom={8} spacingLeft={4} spacingTop={4}/>).container;
        var notice = container.firstChild;
        (0, vitest_1.expect)(notice).toHaveStyle('margin-bottom: 8px');
        (0, vitest_1.expect)(notice).toHaveStyle('margin-left: 4px');
        (0, vitest_1.expect)(notice).toHaveStyle('margin-top: 4px');
    });
    (0, vitest_1.it)('applies typeProps to Typography component', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Notice_1.Notice text="Styled Text" typeProps={{ style: { fontFamily: 'monospace' } }}/>).getByText;
        var typography = getByText('Styled Text');
        (0, vitest_1.expect)(typography).toHaveStyle('font-family: monospace');
    });
});
