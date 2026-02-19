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
exports.MultiSelectWithSeparateSelectionOptions = exports.MultiSelect = exports.CustomRenderOptions = exports.NoOptionsMessage = exports.Default = void 0;
var ui_1 = require("@linode/ui");
var styles_1 = require("@mui/material/styles");
var addon_actions_1 = require("@storybook/addon-actions");
var react_1 = require("react");
var IconButton_1 = require("../IconButton");
var List_1 = require("../List");
var ListItem_1 = require("../ListItem");
var Stack_1 = require("../Stack");
var Autocomplete_1 = require("./Autocomplete");
var Autocomplete_styles_1 = require("./Autocomplete.styles");
var LABEL = 'Select a Linode';
var linodes = [
    {
        label: 'Linode-001',
        value: 'linode-001',
    },
    {
        label: 'Linode-002',
        value: 'linode-002',
    },
    {
        label: 'Linode-003',
        value: 'linode-003',
    },
    {
        label: 'Linode-004',
        value: 'linode-004',
    },
    {
        label: 'Linode-005',
        value: 'linode-005',
    },
];
var AutocompleteWithSeparateSelectedOptions = function (props) {
    var _a = react_1.default.useState([]), selectedOptions = _a[0], setSelectedOptions = _a[1];
    var handleSelectedOptions = react_1.default.useCallback(function (selected) {
        setSelectedOptions(selected);
    }, []);
    // Function to remove an option from the list of selected options
    var removeOption = function (optionToRemove) {
        var updatedSelectedOptions = selectedOptions.filter(function (option) { return option.value !== optionToRemove.value; });
        // Call onSelectionChange to update the selected options
        handleSelectedOptions(updatedSelectedOptions);
    };
    return (<Stack_1.Stack>
      <Autocomplete_1.Autocomplete {...props} multiple onChange={function (e, selected) { return setSelectedOptions(selected); }} renderTags={function () { return null; }} value={selectedOptions}/>
      {selectedOptions.length > 0 && (<>
          <SelectedOptionsHeader>{"Linodes to be Unassigned from Subnet (".concat(selectedOptions.length, ")")}</SelectedOptionsHeader>

          <SelectedOptionsList>
            {selectedOptions.map(function (option) { return (<SelectedOptionsListItem alignItems="center" key={option.value}>
                <StyledLabel>{option.label}</StyledLabel>
                <IconButton_1.IconButton aria-label={"remove ".concat(option.value)} disableRipple onClick={function () { return removeOption(option); }} size="medium">
                  <ui_1.CloseIcon />
                </IconButton_1.IconButton>
              </SelectedOptionsListItem>); })}
          </SelectedOptionsList>
        </>)}
    </Stack_1.Stack>);
};
// Story Config ========================================================
var meta = {
    argTypes: {
        onChange: {
            action: 'onChange',
        },
    },
    args: {
        label: LABEL,
        onChange: (0, addon_actions_1.action)('onChange'),
        options: linodes,
    },
    component: Autocomplete_1.Autocomplete,
    decorators: [
        function (Story) { return (<div style={{ marginLeft: '2em', minHeight: 270 }}>
        <Story />
      </div>); },
    ],
    title: 'Components/Selects/Autocomplete',
};
exports.default = meta;
// Styled Components =================================================
var CustomValue = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme;
    return ({
        font: theme.font.bold,
        fontSize: '1rem',
        wordBreak: 'break-word',
    });
});
var CustomDescription = (0, styles_1.styled)('span')(function () { return ({
    fontSize: '0.875rem',
}); });
var StyledListItem = (0, styles_1.styled)('li')(function () { return ({
    alignItems: 'center',
    display: 'flex',
    width: '100%',
}); });
var StyledLabel = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.color.label,
        font: theme.font.bold,
        fontSize: '14px',
    });
});
var SelectedOptionsHeader = (0, styles_1.styled)('h4')(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.color.headline,
        font: theme.font.bold,
        fontSize: '14px',
        textTransform: 'initial',
    });
});
var SelectedOptionsList = (0, styles_1.styled)(List_1.List)(function (_a) {
    var theme = _a.theme;
    return ({
        background: theme.bg.main,
        maxWidth: '416px',
        padding: '5px 0',
        width: '100%',
    });
});
var SelectedOptionsListItem = (0, styles_1.styled)(ListItem_1.ListItem)(function () { return ({
    justifyContent: 'space-between',
    paddingBottom: 0,
    paddingTop: 0,
}); });
// Story Definitions ==========================================================
exports.Default = {
    args: {
        defaultValue: linodes[0],
    },
    render: function (args) { return <Autocomplete_1.Autocomplete {...args}/>; },
};
exports.NoOptionsMessage = {
    args: {
        noOptionsText: 'This is a custom message when there are no options to display.',
        options: [],
    },
    render: function (args) { return <Autocomplete_1.Autocomplete {...args}/>; },
};
exports.CustomRenderOptions = {
    args: {
        label: 'Select a Linode to Clone',
        options: [
            {
                label: 'Nanode 1 GB, Debian 11, Newark, NJ',
                value: 'debian-us-east',
            },
            {
                label: 'Nanode 2 GB, Debian 11, Newark, NJ',
                value: 'debian-us-east-001',
            },
            {
                label: 'Nanode 3 GB, Debian 11, Newark, NJ',
                value: 'debian-us-east-002',
            },
        ],
        placeholder: 'Select a Linode to Clone',
        renderOption: function (props, option, _a) {
            var selected = _a.selected;
            return (<StyledListItem {...props}>
        <Stack_1.Stack flexGrow={1}>
          <CustomValue>{option.value}</CustomValue>
          <CustomDescription>{option.label}</CustomDescription>
        </Stack_1.Stack>
        <Autocomplete_styles_1.SelectedIcon visible={selected}/>
      </StyledListItem>);
        },
    },
    render: function (args) { return <Autocomplete_1.Autocomplete {...args}/>; },
};
var baseMockLinode = {
    alerts: {
        cpu: 10,
        io: 10000,
        network_in: 0,
        network_out: 0,
        transfer_quota: 80,
    },
    backups: {
        enabled: false,
        last_successful: null,
        schedule: {
            day: null,
            window: null,
        },
    },
    capabilities: [],
    created: '2020-01-01',
    // disk_encryption: 'enabled',
    group: '',
    hypervisor: 'kvm',
    image: 'linode/debian10',
    ipv4: ['50.116.6.212', '192.168.203.1'],
    ipv6: '2600:3c00::f03c:92ff:fee2:6c40/64',
    lke_cluster_id: null,
    region: 'us-east',
    site_type: 'core',
    specs: {
        accelerated_devices: 1,
        disk: 51200,
        gpus: 0,
        memory: 2048,
        transfer: 2000,
        vcpus: 1,
    },
    status: 'running',
    tags: [],
    type: 'g6-standard-1',
    updated: '2020-01-01',
    watchdog_enabled: true,
};
var mockLinodes = [
    __assign(__assign({}, baseMockLinode), { id: 1, label: 'linode-1' }),
    __assign(__assign({}, baseMockLinode), { id: 2, label: 'linode-2' }),
    __assign(__assign({}, baseMockLinode), { id: 3, label: 'linode-3' }),
    __assign(__assign({}, baseMockLinode), { id: 4, label: 'linode-4' }),
];
exports.MultiSelect = {
    args: {},
    render: function () {
        var Example = function () {
            var _a = (0, react_1.useState)([]), selectedLinodes = _a[0], setSelectedLinodes = _a[1];
            return (<Autocomplete_1.Autocomplete label="Linodes" multiple onChange={function (_, value) { return setSelectedLinodes(value); }} options={mockLinodes} value={selectedLinodes}/>);
        };
        return <Example />;
    },
};
exports.MultiSelectWithSeparateSelectionOptions = {
    args: {
        multiple: true,
        onChange: function (e, selected) {
            (0, addon_actions_1.action)('onChange')(selected.map(function (options) { return options.value; }));
        },
        placeholder: LABEL,
        selectAllLabel: 'Linodes',
    },
    render: function (args) { return <AutocompleteWithSeparateSelectedOptions {...args}/>; },
};
