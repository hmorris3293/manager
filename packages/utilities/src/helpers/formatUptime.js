"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUptime = void 0;
var luxon_1 = require("luxon");
var formatUptime = function (uptime) {
    /**
     * We get uptime from the Longview API in
     * seconds.
     */
    var duration = luxon_1.Duration.fromObject({ seconds: uptime });
    var days = Math.floor(duration.as('days'));
    var hours = Math.floor(duration
        .minus({
        days: days,
    })
        .as('hours'));
    var minutes = Math.floor(duration
        .minus({
        days: days,
        hours: hours,
    })
        .as('minutes'));
    var seconds = Math.floor(duration
        .minus({
        days: days,
        hours: hours,
        minutes: minutes,
    })
        .as('seconds'));
    if (days > 0) {
        return "".concat(days, "d ").concat(hours, "h ").concat(minutes, "m");
    }
    else if (hours > 0) {
        return "".concat(hours, "h ").concat(minutes, "m");
    }
    else if (minutes > 0) {
        return "".concat(minutes, "m ").concat(seconds, "s");
    }
    else {
        return "< 1 minute";
    }
};
exports.formatUptime = formatUptime;
