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
exports.useMutateSecurityQuestions = exports.useSecurityQuestions = void 0;
var api_v4_1 = require("@linode/api-v4");
var react_query_1 = require("@tanstack/react-query");
var base_1 = require("../base");
var profile_1 = require("./profile");
var useSecurityQuestions = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.enabled, enabled = _c === void 0 ? true : _c;
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, profile_1.profileQueries.securityQuestions), base_1.queryPresets.oneTimeFetch), { enabled: enabled }));
};
exports.useSecurityQuestions = useSecurityQuestions;
var useMutateSecurityQuestions = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.updateSecurityQuestions,
        onSuccess: function (response) {
            queryClient.setQueryData(profile_1.profileQueries.securityQuestions.queryKey, function (oldData) {
                if (oldData === undefined) {
                    return undefined;
                }
                var newQuestions = oldData.security_questions.map(function (item) { return (__assign(__assign({}, item), { response: null })); });
                var _loop_1 = function (i) {
                    var index = oldData.security_questions.findIndex(function (question) {
                        return question.id === response.security_questions[i].question_id;
                    });
                    newQuestions[index].response =
                        response.security_questions[i].response;
                };
                for (var i = 0; i < response.security_questions.length; i++) {
                    _loop_1(i);
                }
                var _loop_2 = function (i) {
                    var index = newQuestions.findIndex(function (question) {
                        return question.id === response.security_questions[i].question_id;
                    });
                    moveInArray(newQuestions, index, i);
                };
                for (var i = 0; i < response.security_questions.length; i++) {
                    _loop_2(i);
                }
                return {
                    security_questions: newQuestions,
                };
            });
        },
    });
};
exports.useMutateSecurityQuestions = useMutateSecurityQuestions;
function moveInArray(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}
