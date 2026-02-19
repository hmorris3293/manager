"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Dialog_1 = require("./Dialog");
(0, vitest_1.describe)('Dialog', function () {
    var defaultArgs = {
        onClose: vitest_1.vi.fn(),
        open: false,
        title: 'This is a Dialog',
    };
    vitest_1.it.each([
        ['not render', false],
        ['render', true],
    ])('should %s a Dialog with title when open is %s', function (_, isOpen) {
        var _a = (0, testHelpers_1.renderWithTheme)(<Dialog_1.Dialog {...defaultArgs} open={isOpen}/>), queryByTestId = _a.queryByTestId, queryByText = _a.queryByText;
        var title = queryByText('This is a Dialog');
        var dialog = queryByTestId('drawer');
        if (isOpen) {
            (0, vitest_1.expect)(title).toBeInTheDocument();
            (0, vitest_1.expect)(dialog).toBeInTheDocument();
        }
        else {
            (0, vitest_1.expect)(title).not.toBeInTheDocument();
            (0, vitest_1.expect)(dialog).not.toBeInTheDocument();
        }
    });
    (0, vitest_1.it)('should render a Dialog with children if provided', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Dialog_1.Dialog {...defaultArgs} open={true}>
        <p>Child items can go here!</p>
      </Dialog_1.Dialog>).getByText;
        (0, vitest_1.expect)(getByText('Child items can go here!')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should render a Dialog with subtitle if provided', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Dialog_1.Dialog {...defaultArgs} open={true} subtitle="This is a subtitle"/>).getByText;
        (0, vitest_1.expect)(getByText('This is a subtitle')).toBeInTheDocument();
    });
    (0, vitest_1.it)('should call onClose when the Dialog close button is clicked', function () {
        var getByRole = (0, testHelpers_1.renderWithTheme)(<Dialog_1.Dialog {...defaultArgs} open={true}/>).getByRole;
        var closeButton = getByRole('button', { name: 'Close' });
        react_1.fireEvent.click(closeButton);
        (0, vitest_1.expect)(defaultArgs.onClose).toHaveBeenCalled();
    });
    (0, vitest_1.it)('should render a Dialog with an error message if provided', function () {
        var getByText = (0, testHelpers_1.renderWithTheme)(<Dialog_1.Dialog {...defaultArgs} error="Error that will be shown in the dialog." open={true}/>).getByText;
        (0, vitest_1.expect)(getByText('Error that will be shown in the dialog.')).toBeVisible();
    });
});
