"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithError = exports.NotFound = exports.Fetching = exports.Default = void 0;
var addon_actions_1 = require("@storybook/addon-actions");
var preview_api_1 = require("@storybook/preview-api");
var react_1 = require("react");
var ActionsPanel_1 = require("../ActionsPanel");
var Button_1 = require("../Button");
var TextField_1 = require("../TextField");
var Typography_1 = require("../Typography");
var Drawer_1 = require("./Drawer");
var meta = {
    component: Drawer_1.Drawer,
    title: 'Components/Drawer',
};
exports.Default = {
    args: {
        onClose: (0, addon_actions_1.action)('onClose'),
        open: false,
        title: 'My Drawer',
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = react_1.default.useState(args.open), open = _a[0], setOpen = _a[1];
            return (<>
          <Button_1.Button buttonType="primary" onClick={function () { return setOpen(true); }}>
            Click to open Drawer
          </Button_1.Button>
          <Drawer_1.Drawer {...args} onClose={function () { return setOpen(false); }} open={open}>
            <Typography_1.Typography>
              This is some test copy which acts as content for this Drawer
              component. It's very interesting and you should read all of it.
              This text has to be sufficiently long to test that it doesn't
              expand the drawer to an unreasonable width.
            </Typography_1.Typography>
            <TextField_1.TextField label="Input Some Text" placeholder="This is a placeholder"/>
            <ActionsPanel_1.ActionsPanel primaryButtonProps={{ label: 'Save' }} secondaryButtonProps={{
                    label: 'Cancel',
                    onClick: function () { return setOpen(false); },
                }}/>
          </Drawer_1.Drawer>
        </>);
        };
        return <DrawerExampleWrapper />;
    },
};
exports.Fetching = {
    args: {
        isFetching: true,
        open: false,
        title: 'My Drawer was Loading',
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
          <Button_1.Button buttonType="primary" onClick={function () { return updateArgs({ open: true }); }} sx={{ m: 4 }}>
            Click to open Drawer
          </Button_1.Button>
          <Drawer_1.Drawer {...args} isFetching={isFetching} onClose={function () { return updateArgs({ open: false }); }} open={open}>
            <Typography_1.Typography sx={{ mb: 2 }}>
              I smirked at their Kale chips banh-mi fingerstache brunch in
              Williamsburg.
            </Typography_1.Typography>
            <Typography_1.Typography sx={{ mb: 2 }}>
              Meanwhile in my closet-style flat in Red-Hook, my pour-over coffee
              glitched on my vinyl record player while I styled the bottom left
              corner of my beard. Those artisan tacos I ordered were infused
              with turmeric and locally sourced honey, a true farm-to-table
              vibe. Pabst Blue Ribbon in hand, I sat on my reclaimed wood bench
              next to the macramé plant holder.
            </Typography_1.Typography>
            <Typography_1.Typography sx={{ mb: 2 }}>
              Narwhal selfies dominated my Instagram feed, hashtagged with "slow
              living" and "normcore aesthetics". My kombucha brewing kit arrived
              just in time for me to ferment my own chai-infused blend. As I
              adjusted my vintage round glasses, a tiny house documentary
              started playing softly in the background. The retro typewriter
              clacked as I typed out my minimalist poetry on sustainably sourced
              paper. The sun glowed through the window, shining light on the
              delightful cracks of my Apple watch.
            </Typography_1.Typography>
            <Typography_1.Typography sx={{ mb: 2 }}>It was Saturday.</Typography_1.Typography>
            <ActionsPanel_1.ActionsPanel primaryButtonProps={{ label: 'Save' }} secondaryButtonProps={{
                    label: 'Cancel',
                    onClick: function () { return updateArgs({ open: false }); },
                }}/>
          </Drawer_1.Drawer>
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
        title: 'My Drawer',
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = react_1.default.useState(args.open), open = _a[0], setOpen = _a[1];
            return (<>
          <Button_1.Button buttonType="primary" onClick={function () { return setOpen(true); }}>
            Click to open Drawer
          </Button_1.Button>
          <Drawer_1.Drawer {...args} onClose={function () { return setOpen(false); }} open={open}/>
        </>);
        };
        return <DrawerExampleWrapper />;
    },
};
exports.WithError = {
    args: {
        error: 'Some other Error',
        onClose: (0, addon_actions_1.action)('onClose'),
        open: false,
        title: 'My Drawer',
    },
    render: function (args) {
        var DrawerExampleWrapper = function () {
            var _a = react_1.default.useState(args.open), open = _a[0], setOpen = _a[1];
            return (<>
          <Button_1.Button buttonType="primary" onClick={function () { return setOpen(true); }}>
            Click to open Drawer
          </Button_1.Button>
          <Drawer_1.Drawer {...args} onClose={function () { return setOpen(false); }} open={open}/>
        </>);
        };
        return <DrawerExampleWrapper />;
    },
};
exports.default = meta;
