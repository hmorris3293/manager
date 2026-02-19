"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var vitest_1 = require("vitest");
var assets_1 = require("../../assets");
var testHelpers_1 = require("../../utilities/testHelpers");
var ErrorState_1 = require("./ErrorState");
var errorText = 'Some error text here';
var props = {
    CustomIcon: assets_1.PendingIcon,
    errorText: errorText,
};
(0, vitest_1.describe)('Error State', function () {
    (0, vitest_1.it)('renders the ErrorState with specified text properly', function () {
        var screen = (0, testHelpers_1.renderWithTheme)(<ErrorState_1.ErrorState errorText={props.errorText}/>);
        (0, vitest_1.expect)(screen.getByText(errorText)).toBeVisible();
        (0, vitest_1.expect)(screen.getByTestId('ErrorOutlineIcon')).toBeVisible();
    });
    (0, vitest_1.it)('renders the ErrorState with a custom icon image', function () {
        var screen = (0, testHelpers_1.renderWithTheme)(<ErrorState_1.ErrorState {...props}/>);
        (0, vitest_1.expect)(screen.getByText(errorText)).toBeVisible();
        (0, vitest_1.expect)(screen.queryByTestId('ErrorOutlineIcon')).not.toBeInTheDocument();
        var icon = screen.container.querySelector('[data-qa-error-icon="true"]');
        (0, vitest_1.expect)(icon).toBeVisible();
        (0, vitest_1.expect)(icon === null || icon === void 0 ? void 0 : icon.getAttribute('style')).toBe(null);
    });
    (0, vitest_1.it)('renders the ErrorState with a custom icon and custom icon styling', function () {
        var screen = (0, testHelpers_1.renderWithTheme)(<ErrorState_1.ErrorState {...props} CustomIconStyles={{ height: 72, width: 72 }}/>);
        var icon = screen.container.querySelector('[data-qa-error-icon="true"]');
        (0, vitest_1.expect)(icon).toBeVisible();
        (0, vitest_1.expect)(icon === null || icon === void 0 ? void 0 : icon.getAttribute('style')).toBe('height: 72px; width: 72px;');
    });
});
