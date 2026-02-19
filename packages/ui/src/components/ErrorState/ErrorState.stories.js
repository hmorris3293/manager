"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var React = require("react");
var ErrorState_1 = require("./ErrorState");
exports.Default = {
    args: {
        compact: false,
        errorText: 'An error has occurred.',
    },
    render: function (args) {
        return <ErrorState_1.ErrorState {...args}/>;
    },
};
var meta = {
    component: ErrorState_1.ErrorState,
    title: 'Components/Error State',
};
exports.default = meta;
