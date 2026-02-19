"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom/vitest");
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var NewFeatureChip_1 = require("./NewFeatureChip");
(0, vitest_1.describe)('NewFeatureChip', function () {
    (0, vitest_1.it)('renders with default color', function () {
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<NewFeatureChip_1.NewFeatureChip />).getByTestId;
        var newFeatureChip = getByTestId('newFeatureChip');
        (0, vitest_1.expect)(newFeatureChip).toBeInTheDocument();
        (0, vitest_1.expect)(newFeatureChip).toHaveStyle('background-color: rgb(114, 89, 214)');
    });
    (0, vitest_1.it)('triggers an onClick callback', function () {
        var onClickMock = vitest_1.vi.fn();
        var getByTestId = (0, testHelpers_1.renderWithTheme)(<NewFeatureChip_1.NewFeatureChip onClick={onClickMock}/>).getByTestId;
        var newFeatureChip = getByTestId('newFeatureChip');
        react_1.fireEvent.click(newFeatureChip);
        (0, vitest_1.expect)(onClickMock).toHaveBeenCalledTimes(1);
    });
});
