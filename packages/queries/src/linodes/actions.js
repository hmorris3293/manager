"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStartLinodeMutationMutation = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var linodes_1 = require("./linodes");
var useStartLinodeMutationMutation = function (id) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function () { return (0, api_v4_1.startMutation)(id); },
        onSuccess: function () {
            queryClient.invalidateQueries({
                queryKey: linodes_1.linodeQueries.linodes.queryKey,
            });
            queryClient.invalidateQueries({
                exact: true,
                queryKey: linodes_1.linodeQueries.linode(id).queryKey,
            });
        },
    });
};
exports.useStartLinodeMutationMutation = useStartLinodeMutationMutation;
