"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H1Header = void 0;
var React = require("react");
var Typography_1 = require("../Typography");
// Accessibility Feature:
// The role of this component is to implement focus to the main content when navigating the application
// Since it is a one page APP, we need to help users focus on the main content when switching views
// It should serve as the only source for all H1s
var H1Header = function (props) {
    var h1Header = React.useRef(null);
    var className = props.className, dataQaEl = props.dataQaEl, renderAsSecondary = props.renderAsSecondary, sx = props.sx, title = props.title;
    return (<Typography_1.Typography className={className} component={renderAsSecondary ? 'h2' : 'h1'} data-qa-header={dataQaEl ? dataQaEl : ''} ref={renderAsSecondary ? null : h1Header} // If we're rendering as an h2, we want to remove the autofocus functionality
     sx={__assign({ '&:focus': {
                outline: 'none',
            } }, sx)} tabIndex={0} variant="h1">
      {title}
    </Typography_1.Typography>);
};
exports.H1Header = H1Header;
