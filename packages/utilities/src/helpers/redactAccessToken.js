"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactAccessToken = void 0;
var redactAccessToken = function (s) {
    return s.replace(/access_token=[^&]+/g, 'access_token=REDACTED');
};
exports.redactAccessToken = redactAccessToken;
