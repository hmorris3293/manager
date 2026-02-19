"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsGeckoEnabled = void 0;
var queries_1 = require("@linode/queries");
var useIsGeckoEnabled = function (isGecko2EnabledFlag, isGecko2LAFlag) {
    var regions = (0, queries_1.useRegionsQuery)().data;
    var isGeckoLA = isGecko2EnabledFlag && isGecko2LAFlag;
    var isGeckoBeta = isGecko2EnabledFlag && !isGecko2LAFlag;
    var hasDistributedRegionCapability = regions === null || regions === void 0 ? void 0 : regions.some(function (region) {
        return region.capabilities.includes('Distributed Plans');
    });
    var isGeckoLAEnabled = Boolean(hasDistributedRegionCapability && isGeckoLA);
    var isGeckoBetaEnabled = Boolean(hasDistributedRegionCapability && isGeckoBeta);
    return { isGeckoBetaEnabled: isGeckoBetaEnabled, isGeckoLAEnabled: isGeckoLAEnabled };
};
exports.useIsGeckoEnabled = useIsGeckoEnabled;
