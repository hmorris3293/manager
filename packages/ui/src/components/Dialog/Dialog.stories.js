"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.NotFound = exports.Fetching = exports.Default = void 0;
var ui_1 = require("@linode/ui");
var addon_actions_1 = require("@storybook/addon-actions");
var preview_api_1 = require("@storybook/preview-api");
var react_1 = require("react");
var Dialog_1 = require("./Dialog");
var meta = {
    argTypes: {
        children: { description: 'The contents of the Modal.' },
        error: { description: 'Error that will be shown in the dialog.' },
        fullHeight: {
            description: 'Should the Modal take up the entire height of the viewport?',
        },
        fullWidth: {
            description: 'Should the Modal take up the entire width of the viewport?',
        },
        maxWidth: {
            control: {
                type: 'select',
            },
            if: { arg: 'fullWidth' },
            options: ['xs', 'sm', 'md', 'lg', 'xl', false],
        },
        onClose: {
            description: 'Callback fired when the component requests to be closed.',
        },
        open: { description: 'Is the modal open?' },
        slotProps: {
            control: {
                type: 'object',
            },
        },
        title: { description: 'Title that appears in the heading of the dialog.' },
    },
    args: {
        disableAutoFocus: true,
        disableEnforceFocus: true,
        disablePortal: true,
        disableScrollLock: true,
        fullHeight: false,
        fullWidth: false,
        maxWidth: 'md',
        onClose: (0, addon_actions_1.action)('onClose'),
        open: false,
        style: { position: 'unset' },
        title: 'This is a Dialog',
    },
    component: Dialog_1.Dialog,
    title: 'Components/Dialog',
};
exports.default = meta;
exports.Default = {
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = (0, preview_api_1.useArgs)(), open = _a[0].open, updateArgs = _a[1];
            return (<>
          <ui_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: true }); }} sx={{ m: 4 }}>
            Click to open Dialog
          </ui_1.Button>
          <Dialog_1.Dialog {...args} onClose={function () { return updateArgs({ open: false }); }} open={open}>
            <div>This a basic dialog with children in it.</div>
          </Dialog_1.Dialog>
        </>);
        };
        return DrawerExampleWrapper();
    },
};
exports.Fetching = {
    args: {
        isFetching: true,
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = (0, preview_api_1.useArgs)(), _b = _a[0], isFetching = _b.isFetching, open = _b.open, updateArgs = _a[1];
            react_1.default.useEffect(function () {
                if (open) {
                    setTimeout(function () {
                        updateArgs({ isFetching: false, onClose: (0, addon_actions_1.action)('onClose') });
                    }, 1500);
                }
                else {
                    setTimeout(function () {
                        updateArgs({ isFetching: true, onClose: (0, addon_actions_1.action)('onClose') });
                    }, 300);
                }
            }, [isFetching, open, updateArgs]);
            return (<>
          <ui_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: true }); }} sx={{ m: 4 }}>
            Click to open Dialog
          </ui_1.Button>
          <Dialog_1.Dialog {...args} isFetching={isFetching} onClose={function () { return updateArgs({ open: false }); }} open={open}>
            <ui_1.Typography sx={{ mb: 2 }}>
              A most sober dialog, with a title and a description.
            </ui_1.Typography>
            <ui_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: false }); }}>
              Close This Thing
            </ui_1.Button>
          </Dialog_1.Dialog>
        </>);
        };
        return DrawerExampleWrapper();
    },
};
exports.NotFound = {
    args: {
        error: 'Not Found',
        onClose: (0, addon_actions_1.action)('onClose'),
        open: false,
        title: 'My Dialog',
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = (0, preview_api_1.useArgs)(), open = _a[0].open, updateArgs = _a[1];
            return (<>
          <ui_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: true }); }} sx={{ m: 4 }}>
            Click to open Dialog
          </ui_1.Button>
          <Dialog_1.Dialog {...args} onClose={function () { return updateArgs({ open: false }); }} open={open}>
            <div>This a basic dialog with children in it.</div>
          </Dialog_1.Dialog>
        </>);
        };
        return DrawerExampleWrapper();
    },
};
exports.WithError = {
    args: {
        error: 'Some other Error',
        onClose: (0, addon_actions_1.action)('onClose'),
        open: false,
        title: 'My Dialog',
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = (0, preview_api_1.useArgs)(), open = _a[0].open, updateArgs = _a[1];
            return (<>
          <ui_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: true }); }} sx={{ m: 4 }}>
            Click to open Dialog
          </ui_1.Button>
          <Dialog_1.Dialog {...args} onClose={function () { return updateArgs({ open: false }); }} open={open}>
            <div>This a basic dialog with children in it.</div>
          </Dialog_1.Dialog>
        </>);
        };
        return DrawerExampleWrapper();
    },
};
