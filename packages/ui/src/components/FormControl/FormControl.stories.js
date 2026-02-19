"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var FormHelperText_1 = require("../FormHelperText");
var Input_1 = require("../Input");
var InputLabel_1 = require("../InputLabel");
var FormControl_1 = require("./FormControl");
var meta = {
    component: FormControl_1.FormControl,
    title: 'Components/Form/FormControl',
};
exports.Default = {
    args: {
        children: (<>
        <InputLabel_1.InputLabel htmlFor="my-input" sx={{ padding: 0, transform: 'none' }}>
          Email address
        </InputLabel_1.InputLabel>
        <Input_1.Input />
        <FormHelperText_1.FormHelperText id="my-helper-text" sx={{ marginX: 0 }}>
          We never share your email.
        </FormHelperText_1.FormHelperText>
      </>),
    },
    render: function (args) { return <FormControl_1.FormControl {...args}/>; },
};
exports.default = meta;
