"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithAdornment = exports.WithTooltipLarge = exports.WithTooltipSmall = exports.WithTooltipIconLeft = exports.WithTooltip = exports.Number = exports.Error = exports.Default = void 0;
var react_1 = require("react");
var InputAdornment_1 = require("../InputAdornment");
var TextField_1 = require("./TextField");
var meta = {
    component: TextField_1.TextField,
    parameters: {
        docs: {
            description: {
                component: "\n### Overview\nText fields allow users to enter text into a UI.\n\n### Usage\n- Input fields should be sized to the data being entered (ex. the entry for a street address should be wider than a zip code).\n- Ensure that the field can accommodate at least one more character than the maximum number to be entered.\n\n### Rules\n- Every input must have a descriptive label of what that field is.\n- Required fields should include the text \"(Required)\" as part of the input label.\n- If most fields are required, then indicate the optional fields with the text \"(Optional)\" instead.\n- Avoid long labels; use succinct, short and descriptive labels (a word or two) so users can quickly scan your form.\n  Label text shouldn't take up multiple lines.\n- Placeholder text is the text that users see before they interact with a field. It should be a useful guide to the input type and format.\n  Don't make the user guess what format they should use for the field. Tell this information up front.\n\n### Best Practices\n- A single column form with input fields stacked sequentially is the easiest to understand and leads to the highest success rate. Input fields in multiple columns can be overlooked or add unnecessary visual clutter.\n- Grouping related inputs (ex. mailing address) under a subhead or rule can add meaning and make the form feel more manageable.\n- Avoid breaking a single form into multiple \"papers\" unless those sections are truly independent of each other.\n- Consider sizing the input field to the data being entered (ex. the field for a street address should be wider than the field for a zip code). Balance this goal with the visual benefits of fields of the same length. A somewhat outsized input that aligns with the fields above and below it might be the best choice.\n\n## Textfield errors\n\n### Overview\n\nError messages are an indicator of system status: they let users know that a hurdle was encountered and give solutions to fix it. Users should not have to memorize instructions in order to fix the error.\n\n### Main Principles\n\n- Should be easy to notice and understand.\n- Should give solutions to how to fix the error.\n- Users should not have to memorize instructions in order to fix the error.\n- Long error messages for short text fields can extend beyond the text field.\n- When the user has finished filling in a field and clicks the submit button, an indicator should appear if the field contains an error. Use red to differentiate error fields from normal ones.\n\n## Number Text Fields\n\n### Overview\n\nNumber Text Fields are used for strictly numerical input\n        ",
            },
            story: {
                inline: true,
            },
        },
    },
    title: 'Foundations/TextField',
};
exports.default = meta;
exports.Default = {
    args: {
        label: 'Label',
        noMarginTop: true,
        placeholder: 'Placeholder',
    },
};
exports.Error = {
    args: {
        errorText: 'This input needs further attention!',
        label: 'Label for Error',
        noMarginTop: true,
    },
};
exports.Number = {
    args: {
        label: 'Label for Number',
        noMarginTop: true,
        type: 'number',
    },
};
exports.WithTooltip = {
    args: {
        label: 'Label',
        labelTooltipText: 'Tooltip Text',
        noMarginTop: true,
        placeholder: 'Placeholder',
    },
};
exports.WithTooltipIconLeft = {
    args: {
        label: 'Label',
        labelTooltipText: 'Tooltip Text',
        noMarginTop: true,
        placeholder: 'Placeholder',
        labelTooltipIconPosition: 'left',
    },
};
exports.WithTooltipSmall = {
    args: {
        label: 'Label',
        labelTooltipText: 'Tooltip Text',
        noMarginTop: true,
        placeholder: 'Placeholder',
        labelTooltipIconSize: 'small',
    },
};
exports.WithTooltipLarge = {
    args: {
        label: 'Label',
        labelTooltipText: 'Tooltip Text',
        noMarginTop: true,
        placeholder: 'Placeholder',
        labelTooltipIconSize: 'large',
    },
};
exports.WithAdornment = {
    args: {
        InputProps: {
            startAdornment: <InputAdornment_1.InputAdornment position="start">$</InputAdornment_1.InputAdornment>,
        },
        label: 'Label with an InputAdornment',
        noMarginTop: true,
        type: 'number',
    },
};
