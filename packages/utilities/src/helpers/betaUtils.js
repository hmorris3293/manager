"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorizeBetasByStatus = exports.hasEnded = exports.willStart = exports.willEnd = exports.canEnd = exports.hasStarted = void 0;
exports.isCustomerEnrolled = isCustomerEnrolled;
exports.wasCustomerEnrolled = wasCustomerEnrolled;
exports.getBetaStatus = getBetaStatus;
var luxon_1 = require("luxon");
var hasStarted = function (beta) {
    return luxon_1.DateTime.fromISO(beta.started) <= luxon_1.DateTime.now();
};
exports.hasStarted = hasStarted;
var canEnd = function (beta) { var _a; return luxon_1.DateTime.fromISO((_a = beta.ended) !== null && _a !== void 0 ? _a : '').isValid; };
exports.canEnd = canEnd;
var willEnd = function (beta) {
    var _a;
    return (0, exports.canEnd)(beta) && luxon_1.DateTime.fromISO((_a = beta.ended) !== null && _a !== void 0 ? _a : '') >= luxon_1.DateTime.now();
};
exports.willEnd = willEnd;
var willStart = function (beta) { return !(0, exports.hasStarted)(beta); };
exports.willStart = willStart;
var hasEnded = function (beta) { var _a; return (0, exports.canEnd)(beta) && luxon_1.DateTime.fromISO((_a = beta.ended) !== null && _a !== void 0 ? _a : '') < luxon_1.DateTime.now(); };
exports.hasEnded = hasEnded;
function isCustomerEnrolled(beta) {
    var _a;
    if ('enrolled' in beta) {
        var enrollmentDate = luxon_1.DateTime.fromISO((_a = beta.enrolled) !== null && _a !== void 0 ? _a : '');
        return enrollmentDate.isValid && !(0, exports.hasEnded)(beta);
    }
    return false;
}
function wasCustomerEnrolled(beta) {
    var _a;
    if ('enrolled' in beta) {
        var enrollmentDate = luxon_1.DateTime.fromISO((_a = beta === null || beta === void 0 ? void 0 : beta.enrolled) !== null && _a !== void 0 ? _a : '');
        return enrollmentDate.isValid && (0, exports.hasEnded)(beta);
    }
    return false;
}
function getBetaStatus(beta) {
    if (wasCustomerEnrolled(beta) && (0, exports.hasEnded)(beta)) {
        return 'historical';
    }
    if (isCustomerEnrolled(beta) && (0, exports.hasStarted)(beta) && !(0, exports.hasEnded)(beta)) {
        return 'active';
    }
    if (!isCustomerEnrolled(beta) && (0, exports.hasStarted)(beta) && !(0, exports.hasEnded)(beta)) {
        return 'available';
    }
    return 'no_status';
}
var categorizeBetasByStatus = function (betas) {
    var sortedBetas = {
        active: [],
        available: [],
        historical: [],
        no_status: [],
    };
    return betas.reduce(function (acc, beta) {
        var category = getBetaStatus(beta);
        acc[category].push(beta);
        return acc;
    }, sortedBetas);
};
exports.categorizeBetasByStatus = categorizeBetasByStatus;
