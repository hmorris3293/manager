"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var vitest_1 = require("vitest");
var factories_1 = require("../factories");
var betaUtils_1 = require("./betaUtils");
var generateTestBetas = function () { return ({
    activeNeverEndingBeta: factories_1.betaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
    }),
    activeWithEndedBeta: factories_1.betaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
        ended: luxon_1.DateTime.now().plus({ days: 30 }).toISO(),
    }),
    activeBeta: factories_1.betaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
    }),
    activeAccountBeta: factories_1.accountBetaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
        ended: luxon_1.DateTime.now().plus({ days: 30 }).toISO(),
    }),
    expiredBeta: factories_1.betaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 60 }).toISO(),
        ended: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
    }),
    futureBeta: factories_1.betaFactory.build({
        started: luxon_1.DateTime.now().plus({ days: 30 }).toISO(),
        ended: luxon_1.DateTime.now().plus({ days: 60 }).toISO(),
    }),
    futureAccountBeta: factories_1.accountBetaFactory.build({
        started: luxon_1.DateTime.now().plus({ days: 30 }).toISO(),
        ended: luxon_1.DateTime.now().plus({ days: 60 }).toISO(),
    }),
    expiredAccountBeta: factories_1.accountBetaFactory.build({
        started: luxon_1.DateTime.now().minus({ days: 60 }).toISO(),
        ended: luxon_1.DateTime.now().minus({ days: 30 }).toISO(),
    }),
    activeNeverEndingAccountBeta: factories_1.accountBetaFactory.build(),
}); };
var betas;
(0, vitest_1.beforeEach)(function () {
    betas = generateTestBetas();
});
(0, vitest_1.describe)('hasStarted', function () {
    (0, vitest_1.it)('should return true if the beta start date is in the past or today', function () {
        var activeNeverEndingBeta = betas.activeNeverEndingBeta, expiredBeta = betas.expiredBeta;
        (0, vitest_1.expect)((0, betaUtils_1.hasStarted)(activeNeverEndingBeta)).toBe(true);
        (0, vitest_1.expect)((0, betaUtils_1.hasStarted)(expiredBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta start date is in the future', function () {
        var futureBeta = betas.futureBeta;
        (0, vitest_1.expect)((0, betaUtils_1.hasStarted)(futureBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('canEnd', function () {
    (0, vitest_1.it)('should return true if the beta has an end date defined', function () {
        var activeWithEndedBeta = betas.activeWithEndedBeta;
        (0, vitest_1.expect)((0, betaUtils_1.canEnd)(activeWithEndedBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta does not have an end date defined', function () {
        var activeNeverEndingBeta = betas.activeNeverEndingBeta;
        (0, vitest_1.expect)((0, betaUtils_1.canEnd)(activeNeverEndingBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('willEnd', function () {
    (0, vitest_1.it)('should return true if the beta has not ended and has an end date defined', function () {
        var futureBeta = betas.futureBeta;
        (0, vitest_1.expect)((0, betaUtils_1.willEnd)(futureBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta has ended or does not have an end date defined', function () {
        var activeNeverEndingBeta = betas.activeNeverEndingBeta, expiredBeta = betas.expiredBeta;
        (0, vitest_1.expect)((0, betaUtils_1.willEnd)(activeNeverEndingBeta)).toBe(false);
        (0, vitest_1.expect)((0, betaUtils_1.willEnd)(expiredBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('willStart', function () {
    (0, vitest_1.it)('should return true if the beta start date is in the future', function () {
        var futureBeta = betas.futureBeta;
        (0, vitest_1.expect)((0, betaUtils_1.willStart)(futureBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta start date is in the past', function () {
        var expiredBeta = betas.expiredBeta;
        (0, vitest_1.expect)((0, betaUtils_1.willStart)(expiredBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('isCustomerEnrolled', function () {
    (0, vitest_1.it)('should return true if the beta has an enrolled field defined and the end date is in the future', function () {
        var futureAccountBeta = betas.futureAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.isCustomerEnrolled)(futureAccountBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta does not have an enrolled field defined', function () {
        var activeBeta = betas.activeBeta;
        (0, vitest_1.expect)((0, betaUtils_1.isCustomerEnrolled)(activeBeta)).toBe(false);
    });
    (0, vitest_1.it)('should return false if the beta is expired', function () {
        var expiredAccountBeta = betas.expiredAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.isCustomerEnrolled)(expiredAccountBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('wasCustomerEnrolled', function () {
    (0, vitest_1.it)('should return true if the beta is expired', function () {
        var expiredAccountBeta = betas.expiredAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.wasCustomerEnrolled)(expiredAccountBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta does not have an enrolled field defined', function () {
        var activeBeta = betas.activeBeta;
        (0, vitest_1.expect)((0, betaUtils_1.wasCustomerEnrolled)(activeBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('hasEnded', function () {
    (0, vitest_1.it)('should return true if the beta end date is in the past', function () {
        var expiredBeta = betas.expiredBeta;
        (0, vitest_1.expect)((0, betaUtils_1.hasEnded)(expiredBeta)).toBe(true);
    });
    (0, vitest_1.it)('should return false if the beta end date is in the future, or is undefined', function () {
        var activeBeta = betas.activeBeta, activeNeverEndingBeta = betas.activeNeverEndingBeta;
        (0, vitest_1.expect)((0, betaUtils_1.hasEnded)(activeBeta)).toBe(false);
        (0, vitest_1.expect)((0, betaUtils_1.hasEnded)(activeNeverEndingBeta)).toBe(false);
    });
});
(0, vitest_1.describe)('getBetaStatus', function () {
    (0, vitest_1.it)('should return historical if the user enrolled in the beta and it has an end date in the past', function () {
        var expiredAccountBeta = betas.expiredAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(expiredAccountBeta)).toBe('historical');
    });
    (0, vitest_1.it)('should return active if the user enrolled in the beta and it has no end date', function () {
        var activeNeverEndingAccountBeta = betas.activeNeverEndingAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(activeNeverEndingAccountBeta)).toBe('active');
    });
    (0, vitest_1.it)('should return active if the user enrolled in the beta and it has an end date in the future', function () {
        var activeAccountBeta = betas.activeAccountBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(activeAccountBeta)).toBe('active');
    });
    (0, vitest_1.it)('should return available if the user is not enrolled and the beta has no end date', function () {
        var activeBeta = betas.activeBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(activeBeta)).toBe('available');
    });
    (0, vitest_1.it)('should return available if the user is not enrolled and the beta has an end date in the future', function () {
        var activeBeta = betas.activeBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(activeBeta)).toBe('available');
    });
    (0, vitest_1.it)('should return no_status if the beta does not fall in one of the other statuses', function () {
        var futureBeta = betas.futureBeta;
        (0, vitest_1.expect)((0, betaUtils_1.getBetaStatus)(futureBeta)).toBe('no_status');
    });
});
