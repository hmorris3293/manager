"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Styled component using omittedProps
var styled_1 = require("@emotion/styled");
require("@testing-library/jest-dom/vitest");
var vitest_1 = require("vitest");
var omittedProps_1 = require("./omittedProps");
var MyStyledComponent = (0, styled_1.default)('div', {
    label: 'MyStyledComponent',
    shouldForwardProp: (0, omittedProps_1.omittedProps)(['extraProp', 'anotherProp']),
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.color; });
// Unit test for the styled component
var react_1 = require("@testing-library/react");
var react_2 = require("react");
(0, vitest_1.describe)('omittedProps utility', function () {
    (0, vitest_1.it)('filters out omitted props', function () {
        (0, react_1.render)(<MyStyledComponent anotherProp="another" color="red" data-testid="styled-component" extraProp="extra"/>);
        var component = react_1.screen.getByTestId('styled-component');
        (0, vitest_1.expect)(component).not.toHaveAttribute('extraProp');
        (0, vitest_1.expect)(component).not.toHaveAttribute('anotherProp');
        (0, vitest_1.expect)(component).toHaveStyle('color: rgb(255, 0, 0)');
    });
});
(0, vitest_1.describe)('omitProps utility', function () {
    (0, vitest_1.it)('filters out omitted props', function () {
        var props = {
            anotherProp: 'another',
            color: 'red',
            extraProp: 'extra',
        };
        var filteredProps = (0, omittedProps_1.omitProps)(props, ['extraProp', 'anotherProp']);
        (0, vitest_1.expect)(filteredProps).not.toHaveProperty('extraProp');
        (0, vitest_1.expect)(filteredProps).not.toHaveProperty('anotherProp');
        (0, vitest_1.expect)(filteredProps).toHaveProperty('color', 'red');
    });
});
var templateObject_1;
