"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedStatus = void 0;
var capitalize_1 = require("./capitalize");
var getFormattedStatus = function (status) {
    return (0, capitalize_1.capitalizeAllWords)(status.replace(/_/g, ' '));
};
exports.getFormattedStatus = getFormattedStatus;
