"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.srSpeak = void 0;
/**
 * Function to send aria-live messages
 * For instance, when page is loading
 */
var srSpeak = function (text, priority) {
    var el = document.createElement('div');
    // eslint-disable-next-line sonarjs/pseudo-random
    var id = 'speak-' + Math.random().toString(36).substr(2, 9);
    el.setAttribute('id', id);
    el.setAttribute('aria-live', priority || 'polite');
    var srOnlyStyles = {
        borderWidth: '0',
        clip: 'rect(0, 0, 0, 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
    };
    Object.assign(el.style, srOnlyStyles);
    document.body.appendChild(el);
    var elementById = document.getElementById(id);
    if (elementById) {
        window.setTimeout(function () {
            elementById.innerText = text;
        }, 100);
    }
    if (elementById) {
        window.setTimeout(function () {
            document.body.removeChild(elementById);
        }, 1000);
    }
};
exports.srSpeak = srSpeak;
