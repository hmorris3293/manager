"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormattedDate = void 0;
var luxon_1 = require("luxon");
var react_1 = require("react");
var useFormattedDate = function () {
    return (0, react_1.useMemo)(function () {
        var now = luxon_1.DateTime.local();
        return now.toFormat('yyyy-MM-dd');
    }, []);
};
exports.useFormattedDate = useFormattedDate;
