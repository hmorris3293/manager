"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var React = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Radio_1 = require("./Radio");
// This test is for a single radio button, not a radio group
(0, vitest_1.describe)('Radio', function () {
    (0, vitest_1.it)('renders a single radio properly', function () {
        var screen = (0, testHelpers_1.renderWithTheme)(<Radio_1.Radio />);
        var radio = screen.getByRole('radio');
        (0, vitest_1.expect)(radio).toBeInTheDocument();
        var notFilled = screen.container.querySelector('#radio-inner');
        (0, vitest_1.expect)(notFilled).not.toBeInTheDocument();
        react_1.fireEvent.click(radio);
        var filled = screen.container.querySelector('#radio-inner');
        (0, vitest_1.expect)(filled).toBeInTheDocument();
    });
    (0, vitest_1.it)('can render a disabled radio', function () {
        var screen = (0, testHelpers_1.renderWithTheme)(<Radio_1.Radio disabled={true}/>);
        var disabled = screen.container.querySelector('[aria-disabled="true"]');
        (0, vitest_1.expect)(disabled).toBeInTheDocument();
    });
});
