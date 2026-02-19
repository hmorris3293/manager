"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomDate = exports.pickRandom = void 0;
var luxon_1 = require("luxon");
/**
 * Picks a random element from an array
 * @param items { T[] } an array of any kind
 * @returns {T} an element of the given type
 */
var pickRandom = function (items) {
    // eslint-disable-next-line sonarjs/pseudo-random
    return items[Math.floor(Math.random() * items.length)];
};
exports.pickRandom = pickRandom;
/**
 * Generates a random date between two dates
 * @param start {Date} the start date
 * @param end {Date} the end date
 * @returns {Date} a random date between start and end
 */
var randomDate = function (start, end) {
    if (start === void 0) { start = new Date(); }
    if (end === void 0) { end = new Date(2021, 10, 25); }
    return luxon_1.DateTime.fromMillis(
    // eslint-disable-next-line sonarjs/pseudo-random
    start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
exports.randomDate = randomDate;
