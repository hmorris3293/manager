"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotificationsQuery = void 0;
var react_query_1 = require("@tanstack/react-query");
var queries_1 = require("./queries");
var useNotificationsQuery = function () {
    return (0, react_query_1.useQuery)(queries_1.accountQueries.notifications);
};
exports.useNotificationsQuery = useNotificationsQuery;
