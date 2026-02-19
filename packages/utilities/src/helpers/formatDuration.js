"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDuration = void 0;
/**
 * Will format duration (for server tasks) in hours, minutes and seconds
 * We do not handle larger units as this is not really a use case
 */
var formatDuration = function (duration) {
    var hours = duration.as('hours');
    if (hours >= 1) {
        var dur = duration.shiftTo('hours', 'minutes');
        var mins = Math.round(dur.minutes);
        return "".concat(dur.hours, " hour").concat(dur.hours > 1 ? 's' : '', ", ").concat(mins, " minute").concat(mins >= 2 ? 's' : '');
    }
    var minutes = duration.as('minutes');
    if (minutes >= 1) {
        var dur = duration.shiftTo('minutes', 'seconds');
        var secs_1 = Math.round(dur.seconds);
        return "".concat(dur.minutes, " minute").concat(dur.minutes > 1 ? 's' : '', ", ").concat(secs_1, " second").concat(secs_1 >= 2 ? 's' : '');
    }
    var seconds = duration.as('seconds');
    var secs = Math.round(seconds);
    return "".concat(secs, " second").concat(secs >= 2 ? 's' : '');
};
exports.formatDuration = formatDuration;
