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
exports.imageEventsHandler = exports.useUpdateImageRegionsMutation = exports.useUploadImageMutation = exports.useAllImagesQuery = exports.useDeleteImageMutation = exports.useUpdateImageMutation = exports.useCreateImageMutation = exports.useImagesInfiniteQuery = exports.useImageQuery = exports.useImagesQuery = exports.imageQueries = exports.getAllImages = void 0;
var api_v4_1 = require("@linode/api-v4");
var queries_1 = require("@linode/queries");
var utilities_1 = require("@linode/utilities");
var query_key_factory_1 = require("@lukemorales/query-key-factory");
var react_query_1 = require("@tanstack/react-query");
var getAllImages = function (passedParams, passedFilter) {
    if (passedParams === void 0) { passedParams = {}; }
    if (passedFilter === void 0) { passedFilter = {}; }
    return (0, utilities_1.getAll)(function (params, filter) {
        return (0, api_v4_1.getImages)(__assign(__assign({}, params), passedParams), __assign(__assign({}, filter), passedFilter));
    })().then(function (data) { return data.data; });
};
exports.getAllImages = getAllImages;
exports.imageQueries = (0, query_key_factory_1.createQueryKeys)('images', {
    all: function (params, filters) {
        if (params === void 0) { params = {}; }
        if (filters === void 0) { filters = {}; }
        return ({
            queryFn: function () { return (0, exports.getAllImages)(params, filters); },
            queryKey: [params, filters],
        });
    },
    image: function (imageId) { return ({
        queryFn: function () { return (0, api_v4_1.getImage)(imageId); },
        queryKey: [imageId],
    }); },
    infinite: function (filters) { return ({
        queryFn: function (_a) {
            var pageParam = _a.pageParam;
            return (0, api_v4_1.getImages)({ page: pageParam }, filters);
        },
        queryKey: [filters],
    }); },
    paginated: function (params, filters) { return ({
        queryFn: function () { return (0, api_v4_1.getImages)(params, filters); },
        queryKey: [params, filters],
    }); },
});
var useImagesQuery = function (params, filters, options) {
    return (0, react_query_1.useQuery)(__assign(__assign(__assign({}, exports.imageQueries.paginated(params, filters)), { placeholderData: react_query_1.keepPreviousData }), options));
};
exports.useImagesQuery = useImagesQuery;
var useImageQuery = function (imageId, enabled) {
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.imageQueries.image(imageId)), { enabled: enabled }));
};
exports.useImageQuery = useImageQuery;
var useImagesInfiniteQuery = function (filter, enabled) {
    return (0, react_query_1.useInfiniteQuery)(__assign(__assign({}, exports.imageQueries.infinite(filter)), { enabled: enabled, getNextPageParam: function (_a) {
            var page = _a.page, pages = _a.pages;
            if (page === pages) {
                return undefined;
            }
            return page + 1;
        }, initialPageParam: 1, retry: false }));
};
exports.useImagesInfiniteQuery = useImagesInfiniteQuery;
var useCreateImageMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.createImage,
        onSuccess: function (image) {
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.paginated._def,
            });
            queryClient.setQueryData(exports.imageQueries.image(image.id).queryKey, image);
            // If a restricted user creates an entity, we must make sure grants are up to date.
            queryClient.invalidateQueries({
                queryKey: queries_1.profileQueries.grants.queryKey,
            });
        },
    });
};
exports.useCreateImageMutation = useCreateImageMutation;
var useUpdateImageMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var description = _a.description, imageId = _a.imageId, label = _a.label, tags = _a.tags;
            return (0, api_v4_1.updateImage)(imageId, { description: description, label: label, tags: tags });
        },
        onSuccess: function (image) {
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.paginated._def,
            });
            queryClient.setQueryData(exports.imageQueries.image(image.id).queryKey, image);
        },
    });
};
exports.useUpdateImageMutation = useUpdateImageMutation;
var useDeleteImageMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (_a) {
            var imageId = _a.imageId;
            return (0, api_v4_1.deleteImage)(imageId);
        },
        onSuccess: function (_, variables) {
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.paginated._def,
            });
            queryClient.removeQueries({
                queryKey: exports.imageQueries.image(variables.imageId).queryKey,
            });
        },
    });
};
exports.useDeleteImageMutation = useDeleteImageMutation;
var useAllImagesQuery = function (params, filters, enabled) {
    if (params === void 0) { params = {}; }
    if (filters === void 0) { filters = {}; }
    if (enabled === void 0) { enabled = true; }
    return (0, react_query_1.useQuery)(__assign(__assign({}, exports.imageQueries.all(params, filters)), { enabled: enabled }));
};
exports.useAllImagesQuery = useAllImagesQuery;
var useUploadImageMutation = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: api_v4_1.uploadImage,
        onSuccess: function (data) {
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.all._def,
            });
            queryClient.setQueryData(exports.imageQueries.image(data.image.id).queryKey, data.image);
        },
    });
};
exports.useUploadImageMutation = useUploadImageMutation;
var useUpdateImageRegionsMutation = function (imageId) {
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (data) { return (0, api_v4_1.updateImageRegions)(imageId, data); },
        onSuccess: function (image) {
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.paginated._def,
            });
            queryClient.invalidateQueries({
                queryKey: exports.imageQueries.all._def,
            });
            queryClient.setQueryData(exports.imageQueries.image(image.id).queryKey, image);
        },
    });
};
exports.useUpdateImageRegionsMutation = useUpdateImageRegionsMutation;
var imageEventsHandler = function (_a) {
    var event = _a.event, invalidateQueries = _a.invalidateQueries;
    if (['failed', 'finished', 'notification'].includes(event.status)) {
        invalidateQueries({
            queryKey: exports.imageQueries.all._def,
        });
        invalidateQueries({ queryKey: exports.imageQueries.paginated._def });
        if (event.entity) {
            /*
             * Image event entities look like this:
             * "entity": {
             *   "label": "test-1",
             *   "id": 23802090,
             *   "type": "image",
             *   "url": "/v4/images/private/23802090"
             * },
             */
            var imageId = "private/".concat(event.entity.id);
            invalidateQueries({
                queryKey: exports.imageQueries.image(imageId).queryKey,
            });
        }
    }
};
exports.imageEventsHandler = imageEventsHandler;
