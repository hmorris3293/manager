"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeIn = exports.rotate360 = void 0;
var tss_react_1 = require("tss-react");
exports.rotate360 = (0, tss_react_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
exports.fadeIn = (0, tss_react_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    opacity: 0;\n  },\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  },\n  to {\n    opacity: 1;\n  }\n"])));
var templateObject_1, templateObject_2;
