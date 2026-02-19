"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTimezone = void 0;
var luxon_1 = require("luxon");
var getUserTimezone = function (profileTimezone) {
    return profileTimezone &&
        profileTimezone !== '' &&
        luxon_1.IANAZone.isValidZone(profileTimezone)
        ? profileTimezone
        : luxon_1.DateTime.local().zoneName;
};
exports.getUserTimezone = getUserTimezone;
