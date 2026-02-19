"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var profile_1 = require("../factories/profile");
var getUserTimezone_1 = require("./getUserTimezone");
var mockProfile = profile_1.profileFactory.build();
var setMockProfileTimezone = function (setTimezone) {
    mockProfile.timezone = setTimezone;
};
(0, vitest_1.describe)('getUserTimezone', function () {
    (0, vitest_1.it)('should handle a a real timezone', function () {
        setMockProfileTimezone('America/Phoenix');
        (0, vitest_1.expect)((0, getUserTimezone_1.getUserTimezone)(mockProfile.timezone)).toBe('America/Phoenix');
    });
    (0, vitest_1.it)('should handle an empty string timezone', function () {
        setMockProfileTimezone('');
        (0, vitest_1.expect)((0, getUserTimezone_1.getUserTimezone)(mockProfile.timezone)).toBe(luxon_1.DateTime.local().zoneName);
    });
    (0, vitest_1.it)('should handle a null timezone', function () {
        setMockProfileTimezone(null);
        (0, vitest_1.expect)((0, getUserTimezone_1.getUserTimezone)(mockProfile.timezone)).toBe(luxon_1.DateTime.local().zoneName);
    });
    (0, vitest_1.it)('should handle an undefined timezone', function () {
        setMockProfileTimezone(undefined);
        (0, vitest_1.expect)((0, getUserTimezone_1.getUserTimezone)(mockProfile.timezone)).toBe(luxon_1.DateTime.local().zoneName);
    });
});
