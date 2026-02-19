"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var react_1 = require("react");
var FormControl_1 = require("../FormControl");
var Input_1 = require("../Input");
var InputLabel_1 = require("../InputLabel");
var FormHelperText_1 = require("./FormHelperText");
var meta = {
    component: FormHelperText_1.FormHelperText,
    title: 'Components/Form/FormHelperText',
};
exports.Default = {
    args: {
        children: 'Your label must be unique',
        sx: { marginX: 0 },
    },
    render: function (args) { return (<FormControl_1.FormControl>
      <InputLabel_1.InputLabel sx={{ transform: 'none' }}>Label</InputLabel_1.InputLabel>
      <Input_1.Input />
      <FormHelperText_1.FormHelperText {...args}/>
    </FormControl_1.FormControl>); },
};
exports.default = meta;
