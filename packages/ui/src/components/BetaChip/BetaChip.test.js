"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom/vitest");
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var BetaChip_1 = require("./BetaChip");
(0, vitest_1.describe)('BetaChip', function () {
    (0, vitest_1.it)('renders with default color', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<BetaChip_1.BetaChip />).getByTestId;
        var betaChip = getByTestId('betaChip');
        (0, vitest_1.expect)(betaChip).toBeInTheDocument();
        (0, vitest_1.expect)(betaChip).toHaveStyle('background-color: rgb(105, 105, 112)');
    });
    (0, vitest_1.it)('triggers an onClick callback', function () {
        var onClickMock = vitest_1.vi.fn();
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<BetaChip_1.BetaChip onClick={onClickMock}/>).getByTestId;
        var betaChip = getByTestId('betaChip');
        react_1.fireEvent.click(betaChip);
        (0, vitest_1.expect)(onClickMock).toHaveBeenCalledTimes(1);
    });
});
