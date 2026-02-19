"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var scrollErrorIntoViewV2_1 = require("./scrollErrorIntoViewV2");
(0, vitest_1.describe)('scrollErrorIntoViewV2', function () {
    (0, vitest_1.it)('should scroll to the error element when it exists', function () {
        window.HTMLElement.prototype.scrollIntoView = vitest_1.vi.fn();
        var errorElement = document.createElement('div');
        errorElement.classList.add('error-for-scroll');
        var formContainer = document.createElement('div');
        formContainer.appendChild(errorElement);
        var formContainerRef = {
            current: formContainer,
        };
        var observeMock = vitest_1.vi.fn();
        var disconnectMock = vitest_1.vi.fn();
        var takeRecords = vitest_1.vi.fn();
        window.MutationObserver = vitest_1.vi.fn(function () { return ({
            disconnect: disconnectMock,
            observe: observeMock,
            takeRecords: takeRecords,
        }); });
        (0, scrollErrorIntoViewV2_1.scrollErrorIntoViewV2)(formContainerRef);
        (0, vitest_1.expect)(observeMock).toHaveBeenCalledWith(formContainer, {
            attributes: true,
            childList: true,
            subtree: true,
        });
        var mutationCallback = window.MutationObserver.mock.calls[0][0];
        mutationCallback([{ target: formContainer, type: 'childList' }]);
        (0, vitest_1.expect)(errorElement.scrollIntoView).toHaveBeenCalledWith({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
        });
        (0, vitest_1.expect)(disconnectMock).toHaveBeenCalled();
    });
});
