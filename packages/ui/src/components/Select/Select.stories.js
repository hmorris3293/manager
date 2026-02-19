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
exports.LabelPositionTop = exports.LabelPositionLeft = exports.WithTooltipIcon = exports.NoOptionsText = exports.WithErrorText = exports.WithHelperText = exports.Loading = exports.Clearable = exports.Required = exports.Searchable = exports.Creatable = exports.Default = void 0;
var react_1 = require("react");
var Box_1 = require("../Box");
var Typography_1 = require("../Typography");
var Select_1 = require("./Select");
var meta = {
    component: Select_1.Select,
    decorators: [function (Story) { return <Box_1.Box sx={{ height: 300 }}>{Story()}</Box_1.Box>; }],
    title: 'Components/Selects/Select',
};
var defaultArgs = {
    clearable: false,
    creatable: false,
    hideLabel: false,
    label: 'A Select with a couple options',
    options: [
        { label: 'Option 1', value: 'option-1' },
        { label: 'Option 2', value: 'option-2' },
    ],
    placeholder: 'Select an option',
    required: false,
    searchable: false,
};
exports.Default = {
    args: defaultArgs,
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.Creatable = {
    args: __assign(__assign({}, defaultArgs), { creatable: true, label: 'A select where one can create an option', placeholder: 'Select or create an option' }),
    render: function (args) {
        var Wrapper = function () {
            var _a = react_1.default.useState(args.value), value = _a[0], setValue = _a[1];
            return (<>
          <Select_1.Select {...args} onChange={function (_, newValue) {
                    var _a, _b;
                    return setValue({
                        label: (_a = newValue === null || newValue === void 0 ? void 0 : newValue.label) !== null && _a !== void 0 ? _a : '',
                        value: (_b = newValue === null || newValue === void 0 ? void 0 : newValue.value.toString().replaceAll(' ', '-').toLowerCase()) !== null && _b !== void 0 ? _b : '',
                    });
                }} textFieldProps={{
                    onChange: function (e) {
                        return setValue({
                            label: e.target.value,
                            value: e.target.value.replace(' ', '-').toLowerCase(),
                        });
                    },
                }} value={value !== null && value !== void 0 ? value : null}/>
          <Box_1.Box sx={{ mt: 2 }}>
            <Typography_1.Typography>
              <strong>Selected Value: </strong> {JSON.stringify(value)}
            </Typography_1.Typography>
          </Box_1.Box>
        </>);
        };
        return <Wrapper />;
    },
};
exports.Searchable = {
    args: __assign(__assign({}, defaultArgs), { searchable: true }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.Required = {
    args: __assign(__assign({}, defaultArgs), { required: true }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.Clearable = {
    args: __assign(__assign({}, defaultArgs), { clearable: true }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.Loading = {
    args: __assign(__assign({}, defaultArgs), { loading: true }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.WithHelperText = {
    args: __assign(__assign({}, defaultArgs), { helperText: 'This is some helper text' }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.WithErrorText = {
    args: __assign(__assign({}, defaultArgs), { errorText: 'This is some error text' }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.NoOptionsText = {
    args: __assign(__assign({}, defaultArgs), { noOptionsText: "Nothin' here", options: [] }),
    render: function (args) { return <Select_1.Select {...args}/>; },
};
exports.WithTooltipIcon = {
    args: __assign({}, defaultArgs),
    render: function (args) { return (<Select_1.Select {...args} textFieldProps={{
            tooltipText: 'this is a tooltip text',
        }}/>); },
};
exports.LabelPositionLeft = {
    args: __assign({}, defaultArgs),
    render: function (args) { return <Select_1.Select {...args} label="Label" labelPosition="left"/>; },
};
exports.LabelPositionTop = {
    args: __assign({}, defaultArgs),
    render: function (args) { return <Select_1.Select {...args} label="Label" labelPosition="top"/>; },
};
exports.default = meta;
