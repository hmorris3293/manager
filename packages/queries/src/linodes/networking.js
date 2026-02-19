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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAllocateIPMutation = exports.useAssignAdressesMutation = exports.useLinodeShareIPMutation = exports.useLinodeRemoveRangeMutation = exports.useLinodeIPDeleteMutation = exports.useLinodeIPMutation = exports.useLinodeIPsQuery = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var networking_1 = require("../networking");
var linodes_1 = require("./linodes");
var useLinodeIPsQuery = function (linodeId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, linodes_1.linodeQueries.linode(linodeId)._ctx.ips), { enabled: enabled }));
};
exports.useLinodeIPsQuery = useLinodeIPsQuery;
var useLinodeIPMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var address = _a.address, rdns = _a.rdns;
            return (0, api_v4_1.updateIP)(address, rdns);
        },
        onSuccess: function () {
            invalidateIPsForAllLinodes(queryClient);
        },
    });
};
exports.useLinodeIPMutation = useLinodeIPMutation;
var useLinodeIPDeleteMutation = function (linodeId, address) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.removeIPAddress)({ address: address, linodeID: linodeId }); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.ips.queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({ queryKey: networking_1.networkingQueries.ips._def });
        },
    });
};
exports.useLinodeIPDeleteMutation = useLinodeIPDeleteMutation;
var useLinodeRemoveRangeMutation = function (range) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return __awaiter(void 0, void 0, void 0, function () {
            var rangeDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryClient.ensureQueryData(networking_1.networkingQueries.ipv6._ctx.range(range))];
                    case 1:
                        rangeDetails = _a.sent();
                        return [4 /*yield*/, (0, api_v4_1.removeIPv6Range)({ range: range })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, rangeDetails];
                }
            });
        }); },
        onSuccess: function (deletedRange) {
            // Update networking queries
            queryClient.removeQueries({
                queryKey: networking_1.networkingQueries.ipv6._ctx.range(range).queryKey,
            });
            queryClient.invalidateQueries({ queryKey: networking_1.networkingQueries.ips._def });
            queryClient.invalidateQueries({
                queryKey: networking_1.networkingQueries.ipv6._ctx.ranges._def,
            });
            // Update Linode queries
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            for (var _i = 0, _a = deletedRange.linodes; _i < _a.length; _i++) {
                var linode = _a[_i];
                queryClient.invalidateQueries({
                    exact: true,
                    queryKey: linodes_1.linodeQueries.linode(linode).queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(linode)._ctx.ips.queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(linode)._ctx.interfaces.queryKey,
                });
            }
        },
    });
};
exports.useLinodeRemoveRangeMutation = useLinodeRemoveRangeMutation;
var useLinodeShareIPMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.shareAddresses,
        onSuccess: function (response, variables) {
            invalidateIPsForAllLinodes(queryClient);
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(variables.linode_id).queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({ queryKey: networking_1.networkingQueries._def });
        },
    });
};
exports.useLinodeShareIPMutation = useLinodeShareIPMutation;
var useAssignAdressesMutation = function (_a) {
    var currentLinodeId = _a.currentLinodeId;
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.assignAddresses,
        onSuccess: function (_, variables) {
            for (var _i = 0, _a = variables.assignments; _i < _a.length; _i++) {
                var linode_id = _a[_i].linode_id;
                queryClient.invalidateQueries({
                    exact: true,
                    queryKey: linodes_1.linodeQueries.linode(linode_id).queryKey,
                });
                queryClient.invalidateQueries({
                    queryKey: linodes_1.linodeQueries.linode(linode_id)._ctx.ips.queryKey,
                });
            }
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(currentLinodeId).queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(currentLinodeId)._ctx.ips.queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({ queryKey: networking_1.networkingQueries._def });
        },
    });
};
exports.useAssignAdressesMutation = useAssignAdressesMutation;
var useAllocateIPMutation = function (linodeId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.allocateIPAddress)(linodeId, data); },
        onSuccess: function () {
            // Update Linode queries
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(linodeId).queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linode(linodeId)._ctx.ips.queryKey,
            });
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            // Update networking queries
            queryClient.invalidateQueries({
                queryKey: networking_1.networkingQueries.ips._def,
            });
        },
    });
};
exports.useAllocateIPMutation = useAllocateIPMutation;
var invalidateIPsForAllLinodes = function (queryClient) {
    // Because IPs may be shared between Linodes, we can't simpily invalidate one store.
    // Here, we look at all of our active query keys, and invalidate any queryKey that contains 'ips'.
    queryClient.invalidateQueries({
        predicate: function (query) {
            if (Array.isArray(query.queryKey)) {
                return query.queryKey[0] === 'linodes' && query.queryKey[3] === 'ips';
            }
            return false;
        },
    });
};
