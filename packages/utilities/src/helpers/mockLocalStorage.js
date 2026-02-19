"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageMock = void 0;
/**
 * Used for tests where a component relies on localStorage.
 *
 * @example Usage:
 *
 * import { LocalStorageMock } from '@linode/utilities';
 * Object.defineProperty(window, 'localStorage', {
 *   value: new LocalStorageMock()
 * });
 */
var LocalStorageMock = /** @class */ (function () {
    function LocalStorageMock() {
        this.store = {};
    }
    LocalStorageMock.prototype.clear = function () {
        this.store = {};
    };
    LocalStorageMock.prototype.getItem = function (key) {
        return this.store[key] || null;
    };
    LocalStorageMock.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    LocalStorageMock.prototype.setItem = function (key, value) {
        this.store[key] = value.toString();
    };
    return LocalStorageMock;
}());
exports.LocalStorageMock = LocalStorageMock;
