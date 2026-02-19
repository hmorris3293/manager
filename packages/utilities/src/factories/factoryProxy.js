"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = require("factory.ts");
var originalEach = Factory.each;
/**
 * This file is a proxy for the factory.ts library.
 *
 * We Override the `each` method of the factory.ts library to start the index from 1
 * This prevents a a variety of issues with entity IDs being falsy when starting from 0.
 *
 * As a result, `Factory` must be imported from the `factoryProxy` file. ex:
 * `import Factory from 'src/factories/factoryProxy';`
 */
var factoryProxyHandler = {
    get: function (target, prop, receiver) {
        if (prop === 'each') {
            return function (fn) {
                return originalEach(function (i) {
                    return fn(i + 1);
                });
            };
        }
        return Reflect.get(target, prop, receiver);
    },
};
var factoryProxy = new Proxy(Factory, factoryProxyHandler);
exports.Factory = factoryProxy;
