"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var redactAccessToken_1 = require("./redactAccessToken");
(0, vitest_1.describe)('redactAccessToken', function () {
    (0, vitest_1.it)('should not mangle URLs without fragments', function () {
        var url = "http://www.linode.com";
        var result = (0, redactAccessToken_1.redactAccessToken)(url);
        (0, vitest_1.expect)(result).toBe(url);
    });
    (0, vitest_1.it)('should not mangle URLS without access_tokens', function () {
        var url = "http://www.linode.com?something#whatever";
        var result = (0, redactAccessToken_1.redactAccessToken)(url);
        (0, vitest_1.expect)(result).toBe(url);
    });
    (0, vitest_1.it)('should replace the access_token with REDACTED', function () {
        var url = "http://www.linode.com?something#whatever&access_token=ABC123";
        var result = (0, redactAccessToken_1.redactAccessToken)(url);
        (0, vitest_1.expect)(result).toBe("http://www.linode.com?something#whatever&access_token=REDACTED");
    });
});
