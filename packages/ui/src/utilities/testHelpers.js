"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderWithTheme = exports.wrapWithTheme = void 0;
var material_1 = require("@mui/material");
var react_1 = require("@testing-library/react");
var React = require("react");
var themes = require("../foundations/themes");
var wrapWithTheme = function (ui, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    return (<material_1.StyledEngineProvider injectFirst>
    <material_1.ThemeProvider theme={themes[(_a = options.theme) !== null && _a !== void 0 ? _a : 'light']}>
      {(_b = ui.children) !== null && _b !== void 0 ? _b : ui}
    </material_1.ThemeProvider>
  </material_1.StyledEngineProvider>);
};
exports.wrapWithTheme = wrapWithTheme;
var renderWithTheme = function (ui, options) {
    if (options === void 0) { options = {}; }
    var renderResult = (0, react_1.render)((0, exports.wrapWithTheme)(ui, options));
    return __assign(__assign({}, renderResult), { rerender: function (ui) { return renderResult.rerender((0, exports.wrapWithTheme)(ui, options)); } });
};
exports.renderWithTheme = renderWithTheme;
