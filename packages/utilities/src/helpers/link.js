"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childrenContainsNoText = exports.flattenChildrenIntoAriaLabel = exports.opensInNewTab = void 0;
var react_1 = require("react");
/**
 * @param href string
 * @returns string[] or null
 */
var opensInNewTab = function (href) {
    return href.match(/http/) || href.match(/mailto/);
};
exports.opensInNewTab = opensInNewTab;
/**
 * This function is used to flatten the children of the Link component into a single string to be used as the aria-label for external links.
 * @param children React.ReactNode
 * @returns string
 */
var flattenChildrenIntoAriaLabel = function (children) {
    if (typeof children === 'string') {
        return children;
    }
    else if (react_1.default.isValidElement(children)) {
        // If children is a single React element, extract its text content if any.
        return children.props.children
            ? (0, exports.flattenChildrenIntoAriaLabel)(children.props.children)
            : '';
    }
    else if (Array.isArray(children)) {
        // If children is an array of React elements, flatten each child and join the results.
        return children
            .map(function (child) { return (0, exports.flattenChildrenIntoAriaLabel)(child); })
            .join(' ')
            .trim();
    }
    else {
        // If children is neither a string nor a React element nor an array, return an empty string.
        return '';
    }
};
exports.flattenChildrenIntoAriaLabel = flattenChildrenIntoAriaLabel;
/**
 * This function is used to recursively determine if the children of the Link component contain any text.
 * If not, we issue a console error since the link won't be accessible to screen readers.
 * @param children React.ReactNode
 * @returns boolean
 */
var childrenContainsNoText = function (children) {
    if (typeof children === 'string') {
        return children.trim() === '';
    }
    else if (react_1.default.isValidElement(children)) {
        var childText = children.props.children;
        if (childText === null) {
            return true; // Consider null as having no text content.
        }
        if (typeof childText === 'string') {
            return childText.trim() === '';
        }
        // Check if the element is a valid container (e.g., React.Fragment) and has no text content.
        if (react_1.default.isValidElement(childText) || Array.isArray(childText)) {
            return (0, exports.childrenContainsNoText)(childText);
        }
        return true; // Return true for other cases with non-string children.
    }
    else if (Array.isArray(children)) {
        return children.every(function (child) { return (0, exports.childrenContainsNoText)(child); });
    }
    else {
        return true;
    }
};
exports.childrenContainsNoText = childrenContainsNoText;
