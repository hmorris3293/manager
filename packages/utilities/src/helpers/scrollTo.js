"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollTo = void 0;
/**
 * @param [ref] {React.RefObject<any>} - If provided with a React Ref Object we will scroll to the
 * top of it.
 */
var scrollTo = function (ref) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: ref ? ref.current.offsetTop : 0,
    });
};
exports.scrollTo = scrollTo;
