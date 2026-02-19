"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeCastToNumber = void 0;
var isNilOrEmpty_1 = require("./isNilOrEmpty");
var maybeCastToNumber = function (v) {
    return (0, isNilOrEmpty_1.isNilOrEmpty)(v) ? undefined : Number(v);
};
exports.maybeCastToNumber = maybeCastToNumber;
