"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNewlinesWithLineBreaks = void 0;
var react_1 = require("react");
var replaceNewlinesWithLineBreaks = function (text) {
    return text.split('\n').map(function (text, i, lines) {
        return i === lines.length - 1 ? (text) : (<react_1.default.Fragment key={i}>
        {text}
        <br />
      </react_1.default.Fragment>);
    });
};
exports.replaceNewlinesWithLineBreaks = replaceNewlinesWithLineBreaks;
