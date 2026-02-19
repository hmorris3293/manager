"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollErrorIntoViewV2 = void 0;
/**
 * This utility is the version 2 of the scrollErrorIntoView utility.
 * It should be the preferred utility in formik forms.
 * It uses a MutationObserver to solve the issue of the form not always being
 * fully rendered when the scrollErrorIntoView function is called, resulting in
 * some instances in the error not being scrolled into view.
 *
 * If there are multiple form errors, the first one will be scrolled into view.
 *
 * @param formContainerRef A React ref to the form element (or a form container since we're not always semantically aligned on form markup) that contains a potential field error.
 */
var scrollErrorIntoViewV2 = function (formContainerRef) {
    if (!formContainerRef.current) {
        return;
    }
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if ((mutation.type === 'childList' || mutation.type === 'attributes') &&
                formContainerRef.current) {
                var errorElement = formContainerRef.current.querySelector('[class*="error-for-scroll"]');
                if (errorElement) {
                    errorElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'nearest',
                    });
                    observer.disconnect();
                }
            }
        });
    });
    observer.observe(formContainerRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
    });
    return function () { return observer.disconnect(); };
};
exports.scrollErrorIntoViewV2 = scrollErrorIntoViewV2;
