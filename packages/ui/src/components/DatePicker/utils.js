"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSegmentRanges = exports.adjustDateSegment = void 0;
var adjustDateSegment = function (date, segment, step) {
    switch (segment) {
        case 0:
            return date.plus({ years: step }); // Year
        case 1:
            return date.plus({ months: step }); // Month
        case 2:
            return date.plus({ days: step }); // Day
        default:
            return date;
    }
};
exports.adjustDateSegment = adjustDateSegment;
var getSegmentRanges = function (text) { return [
    [0, 4], // Year
    [5, 7], // Month
    [8, 10], // Day
]; };
exports.getSegmentRanges = getSegmentRanges;
