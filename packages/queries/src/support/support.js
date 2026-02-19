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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSupportTicketCloseMutation = exports.useSupportTicketReplyMutation = exports.useInfiniteSupportTicketRepliesQuery = exports.useCreateSupportTicketMutation = exports.useSupportTicketQuery = exports.useSupportTicketsQuery = exports.supportQueries = void 0;
var api_v4_1 = require("@linode/api-v4");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var account_1 = require("../account");
exports.supportQueries = (0, query_key_factory_1.createQueryKeys)('support', {
    ticket: function (id) { return ({
        contextQueries: {
            replies: {
                queryFn: function (_a) {
                    var pageParam = _a.pageParam;
                    return (0, api_v4_1.getTicketReplies)(id, { page: pageParam, page_size: 25 });
                },
                queryKey: null,
            },
        },
        queryFn: function () { return (0, api_v4_1.getTicket)(id); },
        queryKey: [id],
    }); },
    tickets: function (params, filter) { return ({
        queryFn: function () { return (0, api_v4_1.getTickets)(params, filter); },
        queryKey: [params, filter],
    }); },
});
var useSupportTicketsQuery = function (params, filter) {
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.supportQueries.tickets(params, filter)), { placeholderData: react_query_1.keepPreviousData }));
};
exports.useSupportTicketsQuery = useSupportTicketsQuery;
var useSupportTicketQuery = function (id) {
    return (0, react_query_1.useQuery)(exports.supportQueries.ticket(id));
};
exports.useSupportTicketQuery = useSupportTicketQuery;
var useCreateSupportTicketMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createSupportTicket,
        onSuccess: function (ticket) {
            queryClient.invalidateQueries({ queryKey: exports.supportQueries.tickets._def });
            queryClient.setQueryData(exports.supportQueries.ticket(ticket.id).queryKey, ticket);
        },
    });
};
exports.useCreateSupportTicketMutation = useCreateSupportTicketMutation;
var useInfiniteSupportTicketRepliesQuery = function (id) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, exports.supportQueries.ticket(id)._ctx.replies), { getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1 }));
};
exports.useInfiniteSupportTicketRepliesQuery = useInfiniteSupportTicketRepliesQuery;
var useSupportTicketReplyMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createReply,
        onSuccess: function (data, variables) {
            queryClient.invalidateQueries({
                queryKey: exports.supportQueries.tickets._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.supportQueries.ticket(variables.ticket_id).queryKey,
            });
        },
    });
};
exports.useSupportTicketReplyMutation = useSupportTicketReplyMutation;
var useSupportTicketCloseMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.closeSupportTicket)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: exports.supportQueries.tickets._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.supportQueries.ticket(id).queryKey,
            });
            /**
             * When a support ticket is closed, invalidate account notifications
             * because, in some cases, closing a ticket can dismiss a notification.
             */
            queryClient.invalidateQueries({
                queryKey: account_1.accountQueries.notifications.queryKey,
            });
        },
    });
};
exports.useSupportTicketCloseMutation = useSupportTicketCloseMutation;
