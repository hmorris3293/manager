"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithDeleteButton = exports.Custom = exports.Outlined = exports.Clickable = exports.Default = void 0;
var react_1 = require("react");
var Chip_1 = require("./Chip");
exports.Default = {
    render: function (args) { return <Chip_1.Chip {...args}/>; },
};
/**
 * Actionable Chips indicate a state and allow users to take action.<br />
 * **Example:** An ‘Upgrade’ chip on a Kubernetes cluster shows the software is not current and allows a user to upgrade to a new version.<br />
 * **Visual style:** solid color background.
 */
exports.Clickable = {
    render: function (args) { return <Chip_1.Chip {...args} clickable label="Upgrade"/>; },
};
/**
 * Static Chips are an indication of status and are intended to be informational.<br />
 * No action is required or enabled.<br />
 * **Example:** ‘NVMe’ chip on a volume.<br />
 * **Visual style:** outline.
 */
exports.Outlined = {
    render: function (args) { return <Chip_1.Chip {...args} variant="outlined"/>; },
};
exports.Custom = {
    render: function (args) { return (<Chip_1.Chip {...args} label="NVMe" size="small" sx={{ borderColor: 'green' }} variant="outlined"/>); },
};
exports.WithDeleteButton = {
    render: function (args) {
        var ChipWrapper = function () {
            var _a = react_1.default.useState(false), isDeleted = _a[0], setIsDeleted = _a[1];
            var handleDelete = function () {
                setIsDeleted(true);
                setTimeout(function () {
                    setIsDeleted(false);
                }, 1000);
            };
            return (<div style={{ height: 20 }}>
          {!isDeleted ? <Chip_1.Chip {...args} onDelete={handleDelete}/> : null}
        </div>);
        };
        return <ChipWrapper />;
    },
};
var meta = {
    args: { label: 'Chip', onDelete: undefined },
    component: Chip_1.Chip,
    title: 'Foundations/Chip',
};
exports.default = meta;
