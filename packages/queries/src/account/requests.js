"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccountAvailabilitiesRequest = exports.getAllAccountPayments = exports.getAllAccountInvoices = exports.getAllAccountMaintenance = exports.getAllPaymentMethodsRequest = exports.getAllNotifications = void 0;
var api_v4_1 = require("@linode/api-v4");
var utilities_1 = require("@linode/utilities");
var getAllNotifications = function () {
    return (0, utilities_1.getAll)(api_v4_1.getNotifications)().then(function (data) { return data.data; });
};
exports.getAllNotifications = getAllNotifications;
var getAllPaymentMethodsRequest = function () {
    return (0, utilities_1.getAll)(api_v4_1.getPaymentMethods)().then(function (data) { return data.data; });
};
exports.getAllPaymentMethodsRequest = getAllPaymentMethodsRequest;
var getAllAccountMaintenance = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getAccountMaintenance)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (res) { return res.data; });
};
exports.getAllAccountMaintenance = getAllAccountMaintenance;
var getAllAccountInvoices = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (passedParams, passedFilter) {
        var res;
        if (passedParams === void 0) { passedParams = {}; }
        if (passedFilter === void 0) { passedFilter = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utilities_1.getAll)(function (params, filter) {
                        return (0, api_v4_1.getInvoices)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
                    })()];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
            }
        });
    });
};
exports.getAllAccountInvoices = getAllAccountInvoices;
var getAllAccountPayments = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (passedParams, passedFilter) {
        var res;
        if (passedParams === void 0) { passedParams = {}; }
        if (passedFilter === void 0) { passedFilter = {}; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, utilities_1.getAll)(function (params, filter) {
                        return (0, api_v4_1.getPayments)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
                    })()];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.data];
            }
        });
    });
};
exports.getAllAccountPayments = getAllAccountPayments;
var getAllAccountAvailabilitiesRequest = function () {
    return (0, utilities_1.getAll)(function (params, filters) {
        return (0, api_v4_1.getAccountAvailabilities)(params, filters);
    })().then(function (data) { return data.data; });
};
exports.getAllAccountAvailabilitiesRequest = getAllAccountAvailabilitiesRequest;
