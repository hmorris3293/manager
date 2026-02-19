"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initWindows = void 0;
var utilities_1 = require("@linode/utilities");
var luxon_1 = require("luxon");
var initWindows = function (timezone, unshift) {
    var windows = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22].map(function (hour) {
        var start = luxon_1.DateTime.fromObject({ hour: hour }, { zone: 'utc' }).setZone(timezone);
        var finish = start.plus({ hours: 2 });
        return [
            "".concat(start.toFormat('HH:mm'), " - ").concat(finish.toFormat('HH:mm')),
            "W".concat((0, utilities_1.evenizeNumber)(start.setZone('utc').hour)),
        ];
    });
    windows = windows.sort(function (a, b) { return a[0].localeCompare(b[0]); });
    if (unshift) {
        windows.unshift(['Choose a time', 'Scheduling']);
    }
    return windows;
};
exports.initWindows = initWindows;
