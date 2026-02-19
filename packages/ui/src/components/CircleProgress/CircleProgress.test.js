"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom/vitest");
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var vitest_1 = require("vitest");
var CircleProgress_1 = require("./CircleProgress");
var CONTENT_LOADING = 'Content is loading';
(0, vitest_1.describe)('CircleProgress', function () {
    (0, vitest_1.it)('renders a CircleProgress properly', function () {
        var screen = (0, react_1.render)(<CircleProgress_1.CircleProgress />);
        var circleProgress = screen.getByLabelText(CONTENT_LOADING);
        (0, vitest_1.expect)(circleProgress).toBeVisible();
        var circle = screen.getByTestId('circle-progress');
        (0, vitest_1.expect)(circle).toBeInTheDocument();
        (0, vitest_1.expect)(circle).toHaveStyle('width: 124px; height: 124px;');
    });
    (0, vitest_1.it)('renders a small CircleProgress', function () {
        var screen = (0, react_1.render)(<CircleProgress_1.CircleProgress size="sm"/>);
        var circleProgress = screen.getByLabelText(CONTENT_LOADING);
        (0, vitest_1.expect)(circleProgress).toBeVisible();
        (0, vitest_1.expect)(circleProgress).toHaveStyle('width: 40px; height: 40px;');
    });
    (0, vitest_1.it)('sets a small CircleProgress with no padding', function () {
        var screen = (0, react_1.render)(<CircleProgress_1.CircleProgress noPadding size="sm"/>);
        var circleProgress = screen.getByLabelText(CONTENT_LOADING);
        (0, vitest_1.expect)(circleProgress).toBeVisible();
        (0, vitest_1.expect)(circleProgress).toHaveStyle('width: 20px; height: 20px;');
    });
});
