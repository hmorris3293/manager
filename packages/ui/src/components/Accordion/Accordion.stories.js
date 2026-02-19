"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithSubheadingNode = exports.WithSubheadingString = exports.WithHeadingNumberCount = exports.Default = void 0;
var react_1 = require("react");
var Accordion_1 = require("./Accordion");
/**
 * Pretend this is `react-router-dom`'s Link component.
 * This is just an example to show usage with `Accordion`
 */
var Link = function (props) {
    return (<a {...props} href={props.to} rel="noreferrer" target="_blank">
      {props.children}
    </a>);
};
var subHeadingString = 'This is a subheading. It provides context and an explanation of what this section is about.';
var subHeadingNode = (<>
    {subHeadingString}{' '}
    <Link to="https://techdocs.akamai.com/home">Learn more</Link>.
  </>);
var meta = {
    component: Accordion_1.Accordion,
    title: 'Foundations/Accordion',
};
exports.Default = {
    args: {
        children: <p>Any children can go here!</p>,
        heading: 'This is an Accordion',
    },
};
exports.WithHeadingNumberCount = {
    args: {
        children: <p>Any children can go here!</p>,
        heading: 'This is an Accordion',
        headingNumberCount: 1,
    },
};
exports.WithSubheadingString = {
    args: {
        children: <p>Any children can go here!</p>,
        heading: 'This is an Accordion',
        subHeading: subHeadingString,
    },
};
exports.WithSubheadingNode = {
    args: {
        children: <p>Any children can go here!</p>,
        heading: 'This is an Accordion',
        subHeading: subHeadingNode,
    },
};
exports.default = meta;
