"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarningWithListItem = exports.WarningWithListTag = exports.WarningInsidePaper = exports.Warning = exports.Error = exports.InfoWithLongTextAndMarkup = exports.Tip = exports.Info = exports.Success = void 0;
var ui_1 = require("@linode/ui");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Notice_1 = require("./Notice");
exports.Success = {
    render: function (args) { return (<Notice_1.Notice {...args} text="This is a success notice" variant="success"/>); },
};
exports.Info = {
    render: function (args) { return (<Notice_1.Notice {...args} text="This is a informational notice" variant="info"/>); },
};
exports.Tip = {
    render: function (args) { return (<Notice_1.Notice {...args} text="This is a tip notice" variant="tip"/>); },
};
exports.InfoWithLongTextAndMarkup = {
    render: function () { return (<Notice_1.Notice variant="info">
      <ui_1.Typography variant="h2">
        This is a informational notice with a title.
      </ui_1.Typography>
      <ui_1.Typography>This paragraph under the title should wrap.</ui_1.Typography>
    </Notice_1.Notice>); },
};
exports.Error = {
    render: function (args) { return (<Notice_1.Notice {...args} text="This is an error notice" variant="error"/>); },
};
exports.Warning = {
    render: function (args) { return (<Notice_1.Notice {...args} text="This is a warning notice" variant="warning"/>); },
};
exports.WarningInsidePaper = {
    render: function (args) { return (<ui_1.Paper>
      <Notice_1.Notice {...args} text="This is a warning notice inside a paper" variant="warning"/>
    </ui_1.Paper>); },
};
exports.WarningWithListTag = {
    render: function () { return (<Notice_1.Notice variant="warning">
      <ul>
        <li>This is a warning with unordered list bullets</li>
        <li>This is a warning with unordered list bullets</li>
      </ul>
    </Notice_1.Notice>); },
};
exports.WarningWithListItem = {
    render: function () { return (<Notice_1.Notice variant="warning">
      <ui_1.List>
        <ui_1.ListItem>This is a warning with list items</ui_1.ListItem>
        <ui_1.ListItem>This is a warning with list items</ui_1.ListItem>
      </ui_1.List>
    </Notice_1.Notice>); },
};
var meta = {
    args: {
        text: 'This is a notice',
    },
    component: Notice_1.Notice,
    decorators: [
        function (Story) { return (<StyledWrapper>
        <Story />
      </StyledWrapper>); },
    ],
    title: 'Components/Notifications/Notices',
};
exports.default = meta;
var StyledWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: theme.spacing(2),
    });
});
