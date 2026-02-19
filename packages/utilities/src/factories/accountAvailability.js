"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountAvailabilityFactory = void 0;
var helpers_1 = require("../helpers");
var factoryProxy_1 = require("./factoryProxy");
exports.accountAvailabilityFactory = factoryProxy_1.Factory.Sync.makeFactory({
    region: (0, helpers_1.pickRandom)(['us-mia', 'ap-south', 'ap-northeast']),
    unavailable: (0, helpers_1.pickRandom)([
        ['Block Storage'],
        ['Linodes', 'Block Storage', 'Kubernetes', 'NodeBalancers'],
    ]),
});
