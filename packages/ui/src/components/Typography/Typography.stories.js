"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.Body2 = exports.Body1 = exports.H3 = exports.H2 = exports.H1 = exports.Default = void 0;
var react_1 = require("react");
var Typography_1 = require("./Typography");
var meta = {
    component: Typography_1.Typography,
    title: 'Foundations/Typography',
};
exports.Default = {
    args: {
        children: 'Hello World',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
/**
 * #### Primary heading
 * - Empty state entity landing pages.
 * - Billing and payment paper.
 * - Backup auto enrollment paper.
 */
exports.H1 = {
    args: {
        children: 'Hello World',
        variant: 'h1',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
/**
 * #### Secondary heading
 * - Page-level headings and high-level typographical components, such as editable text and breadcrumbs.
 * - Section-level headings, such as drawers, some table headers and panel sections.
 */
exports.H2 = {
    args: {
        children: 'Hello World',
        variant: 'h2',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
/**
 * #### Tertiary headings
 * - Sub-section headings.
 * - Titles of paper components.
 */
exports.H3 = {
    args: {
        children: 'Hello World',
        variant: 'h3',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
exports.Body1 = {
    args: {
        children: 'Hello World',
        variant: 'body1',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
exports.Body2 = {
    args: {
        children: 'Hello World',
        variant: 'body2',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
exports.Caption = {
    args: {
        children: 'Hello World',
        variant: 'caption',
    },
    render: function (args) { return <Typography_1.Typography {...args}/>; },
};
exports.default = meta;
