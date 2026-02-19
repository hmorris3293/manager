"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var vitest_1 = require("vitest");
var link_1 = require("./link");
(0, vitest_1.describe)('opensInNewTab', function () {
    (0, vitest_1.it)('should return true for URLs starting with "http"', function () {
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('http://example.com')).not.toBe(null);
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('https://www.example.com')).not.toBe(null);
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('http://sub.example.com')).not.toBe(null);
    });
    (0, vitest_1.it)('should return true for mailto links', function () {
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('mailto:contact@example.com')).not.toBe(null);
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('mailto:support@example.com')).not.toBe(null);
    });
    (0, vitest_1.it)('should return false for other URLs', function () {
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('ftp://example.com')).toBe(null);
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('tel:+1234567890')).toBe(null);
        (0, vitest_1.expect)((0, link_1.opensInNewTab)('/local-route')).toBe(null);
    });
});
(0, vitest_1.describe)('flattenChildrenIntoAriaLabel', function () {
    (0, vitest_1.it)('should return a string if `children` is of type string', function () {
        var children = 'This is a string';
        (0, vitest_1.expect)((0, link_1.flattenChildrenIntoAriaLabel)(children)).toBe('This is a string');
    });
    (0, vitest_1.it)('should flatten single-level children into a single string', function () {
        var children = <span>Text content</span>;
        (0, vitest_1.expect)((0, link_1.flattenChildrenIntoAriaLabel)(children)).toBe('Text content');
    });
    (0, vitest_1.it)('should flatten nested children into a single string', function () {
        var children = (<>
        <div>First</div>
        <div>
          <p>Second</p>
          <span>Third</span>
        </div>
      </>);
        (0, vitest_1.expect)((0, link_1.flattenChildrenIntoAriaLabel)(children)).toBe('First Second Third');
    });
});
(0, vitest_1.describe)('childrenContainsNoText', function () {
    (0, vitest_1.it)('should return true if children contain no text', function () {
        var noTextChildren = (<>
        <div />
        <span />
      </>);
        (0, vitest_1.expect)((0, link_1.childrenContainsNoText)(noTextChildren)).toBe(true);
    });
    (0, vitest_1.it)('should return false if children contain text', function () {
        var textChildren = (<>
        <div>Text</div>
        <span>Content</span>
        <p>{'With Text'}</p>
      </>);
        (0, vitest_1.expect)((0, link_1.childrenContainsNoText)(textChildren)).toBe(false);
    });
    (0, vitest_1.it)('should return true if children are not valid React elements', function () {
        var invalidChildren = {};
        var emptyArray = [];
        // @ts-expect-error we are testing an invalid input
        (0, vitest_1.expect)((0, link_1.childrenContainsNoText)(invalidChildren)).toBe(true);
        (0, vitest_1.expect)((0, link_1.childrenContainsNoText)(emptyArray)).toBe(true);
    });
});
