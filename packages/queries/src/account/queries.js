"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var requests_1 = require("./requests");
exports.accountQueries = (0, query_key_factory_1.createQueryKeys)('account', {
    account: {
        queryFn: api_v4_1.getAccountInfo,
        queryKey: null,
    },
    agreements: {
        queryFn: api_v4_1.getAccountAgreements,
        queryKey: null,
    },
    availability: {
        queryFn: requests_1.getAllAccountAvailabilitiesRequest,
        queryKey: null,
    },
    betas: {
        contextQueries: {
            beta: function (id) { return ({
                queryFn: function () { return (0, api_v4_1.getAccountBeta)(id); },
                queryKey: [id],
            }); },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getAccountBetas)(params, filter); },
                    queryKey: [params, filter],
                });
            },
        },
        queryKey: null,
    },
    childAccounts: function (options) { return ({
        queryFn: function (_a) {
            var pageParam = _a.pageParam;
            return (0, api_v4_1.getChildAccounts)({
                filter: options.filter,
                headers: options.headers,
                params: {
                    page: pageParam,
                    page_size: 25,
                },
            });
        },
        queryKey: [options],
    }); },
    clientToken: {
        queryFn: api_v4_1.getClientToken,
        queryKey: null,
    },
    invoices: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllAccountInvoices)(params, filter); },
            queryKey: [params, filter],
        });
    },
    logins: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getAccountLogins)(params, filter); },
            queryKey: [params, filter],
        });
    },
    maintenance: {
        contextQueries: {
            all: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, requests_1.getAllAccountMaintenance)(params, filter); },
                    queryKey: [params, filter],
                });
            },
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getAccountMaintenance)(params, filter); },
                    queryKey: [params, filter],
                });
            },
            policies: {
                queryFn: api_v4_1.getMaintenancePolicies,
                queryKey: null,
            },
        },
        queryKey: null,
    },
    notifications: {
        queryFn: requests_1.getAllNotifications,
        queryKey: null,
    },
    oauthClients: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, api_v4_1.getOAuthClients)(params, filter); },
            queryKey: [params, filter],
        });
    },
    paymentMethods: {
        queryFn: requests_1.getAllPaymentMethodsRequest,
        queryKey: null,
    },
    payments: function (params, filter) {
        if (params === void 0) { params = {}; }
        if (filter === void 0) { filter = {}; }
        return ({
            queryFn: function () { return (0, requests_1.getAllAccountPayments)(params, filter); },
            queryKey: [params, filter],
        });
    },
    settings: {
        queryFn: api_v4_1.getAccountSettings,
        queryKey: null,
    },
    transfer: {
        queryFn: api_v4_1.getNetworkUtilization,
        queryKey: null,
    },
    users: {
        contextQueries: {
            paginated: function (params, filter) {
                if (params === void 0) { params = {}; }
                if (filter === void 0) { filter = {}; }
                return ({
                    queryFn: function () { return (0, api_v4_1.getUsers)(params, filter); },
                    queryKey: [params, filter],
                });
            },
            user: function (username) { return ({
                contextQueries: {
                    grants: {
                        queryFn: function () { return (0, api_v4_1.getGrants)(username); },
                        queryKey: null,
                    },
                },
                queryFn: function () { return (0, api_v4_1.getUser)(username); },
                queryKey: [username],
            }); },
        },
        queryKey: null,
    },
});
