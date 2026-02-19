"use strict";
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
exports.useLazyScript = exports.useScript = exports.loadScript = void 0;
var react_1 = require("react");
/**
 * Used to load a traditional Javascript file as if you were using html script tags
 * The logic comes from https://usehooks.com/useScript/
 * @param src source url of the script you intend to load
 * @param options setStatus - a react state set function so that the hook's state can be updated; location - placement of the script in document
 * @returns Promise
 */
var loadScript = function (src, options) {
    return new Promise(function (resolve, reject) {
        var _a, _b;
        // Allow falsy src value if waiting on other data needed for
        // constructing the script URL passed to this hook.
        if (!src) {
            (_a = options === null || options === void 0 ? void 0 : options.setStatus) === null || _a === void 0 ? void 0 : _a.call(options, 'idle');
            return resolve({ status: 'idle' });
        }
        // Fetch existing script element by src
        // It may have been added by another instance of this hook
        var script = document.querySelector("script[src='".concat(src, "']"));
        if (!script) {
            // Create script
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');
            script.onload = function (event) {
                script.setAttribute('data-status', 'ready');
                setStateFromEvent(event);
                resolve({ status: 'ready' });
            };
            script.onerror = function (event) {
                script.setAttribute('data-status', 'error');
                setStateFromEvent(event);
                reject({
                    message: "Failed to load script with src ".concat(src),
                    status: 'error',
                });
            };
            // Add script to document; default to body
            if ((options === null || options === void 0 ? void 0 : options.location) === 'head') {
                document.head.appendChild(script);
            }
            else {
                document.body.appendChild(script);
            }
        }
        else {
            // Grab existing script status from attribute and set to state.
            var existingStatus = script.getAttribute('data-status');
            (_b = options === null || options === void 0 ? void 0 : options.setStatus) === null || _b === void 0 ? void 0 : _b.call(options, existingStatus);
            resolve({ status: existingStatus });
        }
        // Script event handler to update status in state
        // Note: Even if the script already exists we still need to add
        // event handlers to update the state for *this* hook instance.
        var setStateFromEvent = function (event) {
            var _a;
            (_a = options === null || options === void 0 ? void 0 : options.setStatus) === null || _a === void 0 ? void 0 : _a.call(options, event.type === 'load' ? 'ready' : 'error');
        };
    });
};
exports.loadScript = loadScript;
/**
 * useScript is a hook that will load your src script for a React component
 * @param src the source URL of your JS script
 * @param location the placement of the script in document
 * @returns {ScriptStatus} the status of the script you are loading
 */
var useScript = function (src, location) {
    var _a = (0, react_1.useState)(src ? 'loading' : 'idle'), status = _a[0], setStatus = _a[1];
    (0, react_1.useEffect)(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (0, exports.loadScript)(src, { location: location, setStatus: setStatus })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); })();
    }, [src]);
    return status;
};
exports.useScript = useScript;
/**
 * useLazyScript is a hook that will load your src
 * script upon a call to load for a React component
 * @param src the source URL of your JS script
 * @param location the placement of the script in document
 * @returns an object containing the status and the function you can call to start loading the script
 */
var useLazyScript = function (src, location) {
    var _a = (0, react_1.useState)(src ? 'loading' : 'idle'), status = _a[0], setStatus = _a[1];
    return {
        load: function () { return (0, exports.loadScript)(src, { location: location, setStatus: setStatus }); },
        status: status,
    };
};
exports.useLazyScript = useLazyScript;
