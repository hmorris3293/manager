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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.notificationToast = exports.customDarkModeOptions = void 0;
var dark_1 = require("@linode/design-language-system/themes/dark");
var breakpoints_1 = require("../breakpoints");
var primaryColors = {
    dark: dark_1.Color.Brand[90],
    divider: dark_1.Color.Neutrals.Black,
    headline: dark_1.Color.Neutrals[5],
    light: dark_1.Color.Brand[60],
    main: dark_1.Color.Brand[80],
    text: dark_1.Content.Text.Primary.Default,
    white: dark_1.Color.Neutrals.Black,
};
// Eventually we'll probably want Color.Neutrals.Black once we fully migrate to CDS 2.0
// We will need to consult with the design team to determine the correct dark shade handling for:
// - appBar
// - popoverPaper (create menu, notification center)
// - MenuItem (create menu, action menu)
// since Color.Neutrals.Black is pitch black and may not be the correct choice yet.
var tempReplacementforColorNeutralsBlack = '#222';
exports.customDarkModeOptions = {
    bg: {
        app: dark_1.Color.Neutrals[100],
        appBar: tempReplacementforColorNeutralsBlack,
        bgAccessRowTransparentGradient: 'rgb(69, 75, 84, .001)',
        bgPaper: dark_1.Color.Neutrals[90],
        interactionBgPrimary: dark_1.Interaction.Background.Secondary,
        lightBlue1: dark_1.Color.Neutrals.Black,
        lightBlue2: dark_1.Color.Brand[100],
        main: dark_1.Color.Neutrals[100],
        mainContentBanner: dark_1.Color.Neutrals[100],
        offWhite: dark_1.Color.Neutrals[90],
        primaryNavPaper: dark_1.Color.Neutrals[100],
        tableHeader: dark_1.Color.Neutrals[100],
        white: dark_1.Color.Neutrals[100],
    },
    borderColors: {
        borderFocus: dark_1.Interaction.Border.Focus,
        borderHover: dark_1.Interaction.Border.Hover,
        borderTable: dark_1.Color.Neutrals[80],
        borderTypography: dark_1.Color.Neutrals[80],
        divider: dark_1.Color.Neutrals[80],
    },
    color: {
        black: dark_1.Color.Neutrals.White,
        blueDTwhite: dark_1.Color.Neutrals.White,
        border2: dark_1.Color.Neutrals.Black,
        border3: dark_1.Color.Neutrals.Black,
        boxShadow: 'rgba(0, 0, 0, 0.5)',
        boxShadowDark: dark_1.Color.Neutrals.Black,
        buttonPrimaryHover: dark_1.Button.Primary.Hover.Background,
        drawerBackdrop: 'rgba(0, 0, 0, 0.5)',
        grey1: dark_1.Color.Neutrals[50],
        grey2: dark_1.Color.Neutrals[100],
        grey3: dark_1.Color.Neutrals[60],
        grey5: dark_1.Color.Neutrals[100],
        grey6: dark_1.Color.Neutrals[50],
        grey7: dark_1.Color.Neutrals[80],
        grey9: primaryColors.divider,
        headline: dark_1.Content.Text.Primary.Default,
        label: dark_1.Color.Neutrals[40],
        offBlack: dark_1.Color.Neutrals.White,
        red: dark_1.Color.Red[70],
        tableHeaderText: dark_1.Color.Neutrals.White,
        // TODO: `tagButton*` should be moved to component level.
        tagButtonBg: dark_1.Color.Brand[40],
        tagButtonBgHover: dark_1.Button.Primary.Hover.Background,
        tagButtonText: dark_1.Button.Primary.Default.Text,
        tagButtonTextHover: dark_1.Button.Primary.Hover.Text,
        tagIcon: dark_1.Button.Primary.Default.Icon,
        tagIconHover: dark_1.Button.Primary.Default.Text,
        white: dark_1.Color.Neutrals[100],
    },
    textColors: {
        headlineStatic: dark_1.Color.Neutrals[20],
        linkActiveLight: dark_1.Action.Primary.Default,
        linkHover: dark_1.Action.Primary.Hover,
        tableHeader: dark_1.Color.Neutrals[60],
        tableStatic: dark_1.Color.Neutrals[20],
        textAccessTable: dark_1.Color.Neutrals[50],
    },
};
exports.notificationToast = {
    default: {
        backgroundColor: dark_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Informative.IconBackground),
        color: dark_1.NotificationToast.Text,
    },
    error: {
        backgroundColor: dark_1.NotificationToast.Error.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Error.IconBackground),
    },
    info: {
        backgroundColor: dark_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Informative.IconBackground),
    },
    success: {
        backgroundColor: dark_1.NotificationToast.Success.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Success.IconBackground),
    },
    warning: {
        backgroundColor: dark_1.NotificationToast.Warning.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Warning.IconBackground),
    },
    tip: {
        backgroundColor: dark_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(dark_1.NotificationToast.Informative.IconBackground),
    },
};
var iconCircleAnimation = {
    '& .circle': {
        fill: primaryColors.main,
        transition: 'fill .2s ease-in-out .2s',
    },
    '& .insidePath *': {
        stroke: dark_1.Color.Neutrals.White,
        transition: 'fill .2s ease-in-out .2s, stroke .2s ease-in-out .2s',
    },
    '& .outerCircle': {
        animation: '$dash 2s linear forwards',
        stroke: primaryColors.dark,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
    },
};
// Used for styling html buttons to look like our generic links
var genericLinkStyle = {
    '&:hover': {
        color: dark_1.Action.Primary.Hover,
        textDecoration: 'underline',
    },
    background: 'none',
    border: 'none',
    color: dark_1.Action.Primary.Default,
    cursor: 'pointer',
    font: 'inherit',
    padding: 0,
};
// Used for styling status pills as seen on Linodes
var genericStatusPillStyle = (_a = {
        '&:before': {
            borderRadius: '50%',
            content: '""',
            display: 'inline-block',
            height: 16,
            marginRight: 8,
            minWidth: 16,
            width: 16,
        },
        backgroundColor: 'transparent'
    },
    _a[breakpoints_1.breakpoints.down('sm')] = {
        fontSize: 14,
    },
    _a.color = exports.customDarkModeOptions.textColors.tableStatic,
    _a.fontSize = '1rem',
    _a.padding = 0,
    _a);
var genericTableHeaderStyle = {
    '&:hover': {
        '& span': {
            color: exports.customDarkModeOptions.textColors.linkActiveLight,
        },
        cursor: 'pointer',
    },
};
var MuiTableHeadSvgStyles = {
    svg: {
        path: {
            fill: dark_1.Color.Brand[60],
        },
    },
};
var MuiTableZebraHoverStyles = {
    '&.MuiTableRow-hover:not(.disabled-row):hover, &.Mui-selected:not(.disabled-row), &.Mui-selected:not(.disabled-row):hover': {
        background: dark_1.Table.Row.Background.Hover,
    },
};
var MuiTableZebraStyles = __assign({ background: dark_1.Table.Row.Background.Zebra }, MuiTableZebraHoverStyles);
exports.darkTheme = {
    animateCircleIcon: __assign({}, iconCircleAnimation),
    applyLinkStyles: __assign({}, genericLinkStyle),
    applyStatusPillStyles: __assign({}, genericStatusPillStyle),
    applyTableHeaderStyles: __assign({}, genericTableHeaderStyle),
    bg: exports.customDarkModeOptions.bg,
    borderColors: exports.customDarkModeOptions.borderColors,
    breakpoints: breakpoints_1.breakpoints,
    color: exports.customDarkModeOptions.color,
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: dark_1.GlobalHeader.Background,
                    color: dark_1.GlobalHeader.Text.Default,
                    zIndex: 1500, // To be above primary nav
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                clearIndicator: {
                    color: dark_1.Select.Default.Icon,
                },
                groupLabel: {
                    marginTop: '0px !important',
                    top: 0,
                    backgroundColor: dark_1.Dropdown.Background.Category,
                    padding: "".concat(dark_1.Spacing.S8, " ").concat(dark_1.Spacing.S12, " !important"),
                },
                paper: {
                    boxShadow: dark_1.Alias.Elevation.S,
                    marginTop: dark_1.Spacing.S4,
                    paddingTop: dark_1.Spacing.S4,
                    paddingBottom: dark_1.Spacing.S4,
                    backgroundColor: dark_1.Component.Dropdown.Background.Default,
                },
                listbox: {
                    backgroundColor: dark_1.Select.Default.Background,
                    paddingTop: dark_1.Spacing.S4,
                    border: 'none',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                loading: {
                    color: dark_1.Select.Default.Icon,
                    border: "".concat(dark_1.Spacing.S4, " !important"),
                    boxShadow: dark_1.Alias.Elevation.S,
                },
                inputRoot: {
                    paddingLeft: dark_1.Spacing.S12,
                    '& input::placeholder': {
                        color: dark_1.Select.Default.Text,
                        opacity: 1,
                    },
                },
                noOptions: {
                    padding: "".concat(dark_1.Spacing.S8, " ").concat(dark_1.Spacing.S12, " !important"),
                    lineHeight: 1.143,
                },
                option: {
                    '&.Mui-focused': {
                        backgroundColor: "".concat(dark_1.Dropdown.Background.Hover, " !important"),
                    },
                    '&:hover': {
                        backgroundColor: "".concat(dark_1.Dropdown.Background.Hover),
                        color: dark_1.Dropdown.Text.Default,
                    },
                    '& .fi': {
                        width: dark_1.Spacing.S28,
                        height: dark_1.Spacing.S20,
                        borderRadius: '3px',
                        backgroundSize: 'cover',
                        boxShadow: 'none',
                    },
                    padding: "".concat(dark_1.Spacing.S6, " ").concat(dark_1.Spacing.S12, " !important"),
                },
                popper: {
                    // To remove the double border of listbox and input
                    '&.MuiAutocomplete-popper': {
                        '&[data-popper-placement="bottom"], &[data-popper-placement="top"]': {
                            '.MuiAutocomplete-listbox': {
                                padding: 0,
                                '& .MuiAutocomplete-groupLabel': {
                                    color: dark_1.Dropdown.Text.Default,
                                    font: dark_1.Typography.Heading.Overline,
                                    textTransform: dark_1.Typography.Heading.OverlineTextCase,
                                },
                            },
                            '.MuiAutocomplete-option': {
                                padding: "".concat(dark_1.Spacing.S6, " ").concat(dark_1.Spacing.S12, " !important"),
                                svg: {
                                    height: dark_1.Spacing.S16,
                                    width: dark_1.Spacing.S16,
                                },
                            },
                        },
                        '&[data-popper-placement="bottom"]': {
                            '.MuiAutocomplete-listbox': {
                                borderTop: 0,
                            },
                        },
                        '&[data-popper-placement="top"]': {
                            '.MuiAutocomplete-listbox': {
                                borderBottom: 0,
                            },
                        },
                    },
                },
                popupIndicator: {
                    color: dark_1.Select.Default.Icon,
                },
                tag: {
                    '.MuiChip-deleteIcon': {
                        color: dark_1.Select.Default.Icon,
                        width: 'auto',
                        height: 'auto',
                    },
                    backgroundColor: exports.customDarkModeOptions.bg.lightBlue1,
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                root: exports.customDarkModeOptions.color.drawerBackdrop,
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&:active': {
                        backgroundColor: dark_1.Button.Primary.Pressed.Background,
                    },
                    '&:disabled': {
                        backgroundColor: dark_1.Button.Primary.Disabled.Background,
                        color: dark_1.Button.Primary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: dark_1.Button.Primary.Hover.Background,
                        color: dark_1.Button.Primary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: dark_1.Button.Primary.Disabled.Background,
                        color: dark_1.Button.Primary.Disabled.Text,
                    },
                    backgroundColor: dark_1.Button.Primary.Default.Background,
                    border: "1px solid transparent",
                    color: dark_1.Button.Primary.Default.Text,
                },
                containedSecondary: {
                    '&:active': {
                        backgroundColor: 'transparent',
                        color: dark_1.Button.Secondary.Pressed.Text,
                    },
                    '&:disabled': {
                        backgroundColor: 'transparent',
                        color: dark_1.Button.Secondary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: 'transparent',
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: 'transparent',
                        color: dark_1.Button.Secondary.Disabled.Text,
                    },
                    backgroundColor: 'transparent',
                    color: dark_1.Button.Secondary.Default.Text,
                },
                outlined: {
                    '&:active': {
                        backgroundColor: dark_1.Button.Secondary.Pressed.Background,
                        borderColor: dark_1.Button.Secondary.Pressed.Text,
                        color: dark_1.Button.Secondary.Pressed.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: dark_1.Button.Secondary.Hover.Background,
                        color: dark_1.Button.Secondary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: dark_1.Button.Secondary.Disabled.Background,
                        border: "1px solid ".concat(dark_1.Button.Secondary.Disabled.Border),
                        color: dark_1.Button.Secondary.Disabled.Text,
                    },
                    backgroundColor: dark_1.Button.Secondary.Default.Background,
                    border: "1px solid ".concat(dark_1.Button.Secondary.Default.Border),
                    color: dark_1.Button.Secondary.Default.Text,
                    minHeight: 34,
                },
                root: {
                    font: dark_1.Typography.Label.Semibold.S,
                },
            },
            variants: [
                {
                    props: { color: 'error' },
                    style: {
                        '&:not([aria-disabled="true"]):hover, &:not([aria-disabled="true"]):focus': {
                            backgroundColor: dark_1.Button.Danger.Hover.Background,
                            border: "1px solid ".concat(dark_1.Button.Danger.Hover.Background),
                            color: dark_1.Button.Danger.Hover.Text,
                        },
                        '&[aria-disabled="true"]': {
                            backgroundColor: dark_1.Button.Danger.Disabled.Background,
                            border: "1px solid ".concat(dark_1.Button.Danger.Disabled.Background),
                            color: dark_1.Button.Danger.Disabled.Text,
                        },
                        backgroundColor: dark_1.Button.Danger.Default.Background,
                        border: "1px solid ".concat(dark_1.Button.Danger.Default.Background),
                        color: dark_1.Button.Danger.Default.Text,
                    },
                },
            ],
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&[aria-disabled="true"]': {
                        '& .MuiSvgIcon-root': {
                            fill: dark_1.Button.Primary.Disabled.Icon,
                        },
                        cursor: 'not-allowed',
                    },
                    fontSize: '1rem',
                },
            },
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2) !important',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    backgroundColor: dark_1.Color.Neutrals[50],
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    // Unchecked & Disabled
                    '&.Mui-disabled': {
                        '& svg': {
                            backgroundColor: dark_1.Component.Checkbox.Empty.Disabled.Background,
                        },
                        color: dark_1.Component.Checkbox.Empty.Disabled.Border,
                        pointerEvents: 'none',
                    },
                    // Checked & Disabled
                    '&.Mui-checked.Mui-disabled': {
                        color: dark_1.Component.Checkbox.Checked.Disabled.Background,
                    },
                    // Indeterminate & Disabled
                    '&.MuiCheckbox-indeterminate.Mui-disabled': {
                        color: dark_1.Component.Checkbox.Indeterminated.Disabled.Background,
                    },
                    color: dark_1.Component.Checkbox.Empty.Default.Border,
                },
            },
        },
        MuiChip: {
            defaultProps: {
                // In dark mode, we decided our Chips will be our primary color by default.
                color: 'primary',
            },
            styleOverrides: {
                // TODO: This will need CDS guidance in future
                clickable: {
                    '&:active': {
                        backgroundColor: dark_1.Button.Primary.Pressed.Background,
                    },
                    '&:disabled': {
                        backgroundColor: dark_1.Button.Primary.Disabled.Background,
                        color: dark_1.Button.Primary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: dark_1.Button.Primary.Hover.Background,
                        color: dark_1.Button.Primary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: dark_1.Button.Primary.Disabled.Background,
                        color: dark_1.Button.Primary.Disabled.Text,
                    },
                    backgroundColor: dark_1.Button.Primary.Default.Background,
                    border: "1px solid transparent",
                    color: dark_1.Button.Primary.Default.Text,
                },
                colorError: {
                    backgroundColor: dark_1.Badge.Negative.Subtle.Background,
                    color: dark_1.Badge.Negative.Subtle.Text,
                },
                colorInfo: {
                    backgroundColor: dark_1.Badge.Informative.Subtle.Background,
                    color: dark_1.Badge.Informative.Subtle.Text,
                },
                colorPrimary: {
                    backgroundColor: dark_1.Badge.Informative.Subtle.Background,
                    color: dark_1.Badge.Informative.Subtle.Text,
                },
                colorSecondary: {
                    '&.MuiChip-clickable': {
                        '&:hover': {
                            backgroundColor: dark_1.Badge.Informative.Subtle.Background,
                            color: dark_1.Badge.Informative.Subtle.Text,
                        },
                    },
                    backgroundColor: dark_1.Badge.Informative.Subtle.Background,
                    color: dark_1.Badge.Informative.Subtle.Text,
                },
                colorSuccess: {
                    backgroundColor: dark_1.Badge.Positive.Subtle.Background,
                    color: dark_1.Badge.Positive.Subtle.Text,
                },
                colorWarning: {
                    backgroundColor: dark_1.Badge.Warning.Subtle.Background,
                    color: dark_1.Badge.Warning.Subtle.Text,
                },
                outlined: {
                    '& .MuiChip-label': {
                        color: dark_1.Content.Text.Primary.Default,
                    },
                    backgroundColor: 'transparent',
                    borderRadius: 1,
                },
                root: {
                    color: dark_1.Content.Text.Primary.Default,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: "0 0 5px ".concat(dark_1.Color.Neutrals[100]),
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    borderBottom: "1px solid ".concat(dark_1.Color.Neutrals[100]),
                    color: dark_1.Content.Text.Primary.Default,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: exports.customDarkModeOptions.borderColors.divider,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    border: 0,
                    boxShadow: "0 0 5px ".concat(dark_1.Color.Neutrals[100]),
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    // Component.Checkbox.Checked.Disabled
                    '&.copy > div': {
                        backgroundColor: dark_1.Color.Neutrals[100],
                    },
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                disabled: {},
                label: {
                    '&.Mui-disabled': {
                        color: "".concat(dark_1.Color.Neutrals[50], " !important"),
                    },
                    color: dark_1.Content.Text.Primary.Default,
                },
                root: {},
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    '&[class*="error"]': {
                        color: dark_1.Select.Error.HintText,
                    },
                    fontWeight: dark_1.Font.FontWeight.Semibold,
                    color: dark_1.Color.Neutrals[40],
                    lineHeight: 1.25,
                    marginTop: '4px',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&$disabled': {
                        color: dark_1.Component.Label.Text,
                    },
                    '&$error': {
                        color: dark_1.Component.Label.Text,
                    },
                    '&.Mui-focused': {
                        color: dark_1.Component.Label.Text,
                    },
                    color: dark_1.Component.Label.Text,
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&.MuiIconButton-isActive': {
                        svg: {
                            path: {
                                fill: dark_1.Content.Icon.Primary.Active,
                            },
                        },
                    },
                    '&:hover': {
                        color: dark_1.Content.Icon.Primary.Hover,
                    },
                },
            },
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    color: dark_1.Search.Filled.Icon,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: dark_1.TextField.Placeholder.Text,
                    },
                },
                root: {
                    '&.Mui-error': {
                        backgroundColor: dark_1.TextField.Error.Background,
                        borderColor: dark_1.TextField.Error.Border,
                        color: dark_1.TextField.Error.Text,
                    },
                    '&:active, &:focus, &.Mui-focused, &.Mui-focused:hover': {
                        backgroundColor: dark_1.TextField.Focus.Background,
                        border: "1px solid ".concat(dark_1.TextField.Focus.Border),
                        color: dark_1.TextField.Focus.Text,
                    },
                    '&:disabled, &[aria-disabled="true"], &.Mui-disabled, &.Mui-disabled:hover': {
                        backgroundColor: dark_1.TextField.Disabled.Background,
                        border: "1px solid ".concat(dark_1.TextField.Disabled.Border),
                        color: dark_1.TextField.Disabled.Text,
                    },
                    '&:hover': {
                        backgroundColor: dark_1.TextField.Hover.Background,
                        border: "1px solid ".concat(dark_1.TextField.Hover.Border),
                        color: dark_1.TextField.Hover.Text,
                    },
                    background: dark_1.TextField.Default.Background,
                    border: "1px solid ".concat(dark_1.TextField.Default.Border),
                    color: dark_1.TextField.Filled.Text,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&.selectHeader': {
                        color: dark_1.Content.Text.Primary.Default,
                    },
                    color: dark_1.Content.Text.Primary.Default,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&.loading': {
                        backgroundColor: dark_1.Content.Text.Primary.Default,
                    },
                    '&:active': {
                        backgroundColor: dark_1.Dropdown.Background.Default,
                    },
                    '&:disabled': {
                        backgroundColor: dark_1.Dropdown.Background.Default,
                        color: dark_1.Dropdown.Text.Disabled,
                        opacity: 1,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: dark_1.Color.Neutrals[80],
                        color: dark_1.Dropdown.Text.Default,
                    },
                    '&:last-child': {
                        borderBottom: 0,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: dark_1.Dropdown.Background.Default,
                        color: dark_1.Dropdown.Text.Disabled,
                        opacity: 1,
                    },
                    backgroundColor: tempReplacementforColorNeutralsBlack,
                    color: dark_1.Dropdown.Text.Default,
                    padding: '10px 10px 10px 16px',
                },
                selected: {},
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: (_b = {
                        '&.Mui-disabled': {
                            WebkitTextFillColor: 'unset !important',
                        },
                        boxSizing: 'border-box'
                    },
                    _b[breakpoints_1.breakpoints.only('xs')] = {
                        fontSize: '1rem',
                    },
                    _b.fontSize = '0.9rem',
                    _b.padding = 8,
                    _b),
                root: {
                    '& svg': {
                        color: dark_1.TextField.Default.InfoIcon,
                    },
                    '&.Mui-disabled': {
                        '& svg': {
                            color: dark_1.TextField.Disabled.InfoIcon,
                        },
                        backgroundColor: dark_1.TextField.Disabled.Background,
                        borderColor: dark_1.TextField.Disabled.Border,
                        color: dark_1.TextField.Disabled.Text,
                    },
                    '&.Mui-error': {
                        '& svg': {
                            color: dark_1.TextField.Error.Icon,
                        },
                        backgroundColor: dark_1.TextField.Error.Background,
                        borderColor: dark_1.TextField.Error.Border,
                        color: dark_1.TextField.Error.Text,
                    },
                    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                        borderColor: dark_1.TextField.Error.Border,
                        color: dark_1.TextField.Error.Text,
                    },
                    '&.Mui-focused': {
                        '& svg': {
                            color: dark_1.TextField.Focus.Icon,
                        },
                        backgroundColor: dark_1.TextField.Focus.Background,
                        borderColor: dark_1.TextField.Focus.Border,
                        boxShadow: "0 0 2px 1px ".concat(dark_1.Color.Neutrals[100]),
                        color: dark_1.TextField.Focus.Text,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderWidth: '1px',
                        boxShadow: "0 0 2px 1px ".concat(dark_1.Color.Neutrals[100]),
                    },
                    '&.Mui-hover': {
                        '& svg': {
                            color: dark_1.TextField.Hover.Icon,
                        },
                        backgroundColor: dark_1.TextField.Hover.Background,
                        borderColor: dark_1.TextField.Hover.Border,
                        color: dark_1.TextField.Hover.Text,
                    },
                    backgroundColor: dark_1.TextField.Default.Background,
                    borderColor: dark_1.TextField.Default.Border,
                    borderRadius: 0,
                    boxSizing: 'border-box',
                    color: dark_1.TextField.Filled.Text,
                    height: '34px',
                    lineHeight: 1,
                    minHeight: '34px',
                    transition: 'border-color 225ms ease-in-out',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                outlined: {
                    // TODO: We can remove this variant since they will always have a border
                    backgroundColor: dark_1.Color.Neutrals[90],
                    border: "1px solid ".concat(dark_1.Color.Neutrals[80]),
                },
                root: {
                    backgroundColor: dark_1.Color.Neutrals[90],
                    backgroundImage: 'none', // I have no idea why MUI defaults to setting a background image...
                    border: 0,
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    background: tempReplacementforColorNeutralsBlack,
                    border: 0,
                    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.18)", // TODO: Fix Elevation.S to remove `inset`
                },
            },
        },
        MuiRadio: {
            styleOverrides: {
                colorSecondary: {
                    '&$checked': {
                        '&:hover': {
                            backgroundColor: 'rgba(36, 83, 233, 0.04)',
                        },
                        color: primaryColors.main,
                    },
                    '&:hover': {
                        backgroundColor: 'rgba(36, 83, 233, 0.04)',
                    },
                    color: primaryColors.main,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {},
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: dark_1.Color.Neutrals[100],
                    boxShadow: "0 0 5px ".concat(dark_1.Color.Neutrals[100]),
                    color: dark_1.Content.Text.Primary.Default,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    '& .Mui-disabled': {
                        '& + .MuiSwitch-track': {
                            opacity: '.5 !important',
                        },
                        opacity: 0.5,
                    },
                },
                track: {
                    backgroundColor: dark_1.Color.Neutrals[80],
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&$selected, &$selected:hover': {
                        color: dark_1.Color.Neutrals.White,
                    },
                    color: dark_1.Color.Neutrals.White,
                },
                selected: {},
                textColorPrimary: {
                    '&$selected, &$selected:hover': {
                        color: dark_1.Color.Neutrals.White,
                    },
                    color: dark_1.Color.Neutrals.White,
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    // Zebra Striping
                    '&.MuiTable-zebra': {
                        // Linodes Group by Tag: First Row is the Title
                        '&.MuiTable-groupByTag .MuiTableRow-root:not(:first-of-type):nth-of-type(odd)': MuiTableZebraStyles,
                        // Default Striping
                        '&:not(.MuiTable-groupByTag) .MuiTableRow-root:not(.MuiTableRow-nested):nth-of-type(even)': MuiTableZebraStyles,
                    },
                    // Nested Tables
                    '.MuiTable-root': {
                        '.MuiTableCell-head': {
                            color: dark_1.Table.HeaderOutlined.Text,
                        },
                        '.MuiTableRow-head, .MuiTableRow-head.MuiTableRow-hover:hover': {
                            background: dark_1.Background.Neutralsubtle,
                        },
                        border: 0,
                    },
                    // Collapsible Rows
                    '.MuiTableRow-root:not(:last-of-type) .MuiCollapse-root': {
                        borderBottom: "1px solid ".concat(dark_1.Border.Normal),
                    },
                    border: "1px solid ".concat(dark_1.Border.Normal),
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    // User Permissions Table
                    '.MuiFormControlLabel-label': {
                        color: dark_1.Table.HeaderNested.Text,
                    },
                    // Icons in TH (i.e.: Summary View, Group by Tag)
                    '.MuiIconButton-root': {
                        '&.MuiIconButton-isActive': MuiTableHeadSvgStyles,
                        ':hover': __assign({ color: dark_1.Color.Brand[60] }, MuiTableHeadSvgStyles),
                        svg: {
                            path: {
                                fill: dark_1.Color.Neutrals.White,
                            },
                        },
                    },
                    color: dark_1.Table.HeaderNested.Text,
                },
                root: {
                    '&.MuiTableCell-nested': {
                        '.MuiCollapse-root': {
                            borderBottom: "1px solid ".concat(dark_1.Border.Normal),
                        },
                    },
                    borderBottom: "1px solid ".concat(dark_1.Table.Row.Border),
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: dark_1.Table.HeaderNested.Background,
                },
                root: {
                    // Prevent needing `hover={false}` on header TableRows
                    '&.MuiTableRow-head.MuiTableRow-hover:hover': {
                        backgroundColor: dark_1.Table.HeaderNested.Background,
                    },
                    // The `hover` rule isn't implemented correctly in MUI, so we apply it here.
                    '&.MuiTableRow-hover:not(.disabled-row):hover, &.Mui-selected:not(.disabled-row), &.Mui-selected:not(.disabled-row):hover': {
                        backgroundColor: dark_1.Table.Row.Background.Hover,
                    },
                    '&.MuiTableRow-hover:hover.disabled-row': {
                        cursor: 'not-allowed',
                        backgroundColor: 'inherit',
                        '& .MuiFormControlLabel-root.Mui-disabled': {
                            cursor: 'not-allowed',
                        },
                    },
                    // Disable hover for nested rows (VPC)
                    '&.MuiTableRow-nested, &.MuiTableRow-nested.MuiTableRow-hover:hover': {
                        backgroundColor: dark_1.Table.Row.Background.Default,
                    },
                    // TODO: Use design tokens in future when ready
                    '&.disabled-row .MuiTableCell-root': {
                        color: dark_1.Content.Text.Primary.Disabled,
                    },
                    background: dark_1.Table.Row.Background.Default,
                },
            },
        },
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-active': {
                        color: dark_1.Table.HeaderNested.Text,
                    },
                    ':hover': __assign(__assign({}, MuiTableHeadSvgStyles), { color: dark_1.Color.Brand[60] }),
                    svg: {
                        path: {
                            fill: dark_1.Table.HeaderNested.Text,
                        },
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    '& $scrollButtons:first-of-type': {
                        color: dark_1.Color.Neutrals.Black,
                    },
                },
                root: {
                    boxShadow: "inset 0 -1px 0 ".concat(dark_1.Color.Neutrals[100]),
                },
                scrollButtons: {
                    color: dark_1.Color.Neutrals.White,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: dark_1.Color.Neutrals[70],
                    boxShadow: "0 0 5px ".concat(dark_1.Color.Neutrals[100]),
                    color: dark_1.Color.Neutrals.White,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    '& a': {
                        color: dark_1.Action.Primary.Default,
                    },
                    '& a.black': {
                        color: dark_1.Content.Text.Primary.Default,
                    },
                    '& a.black:hover': {
                        color: dark_1.Content.Text.Primary.Default,
                    },
                    '& a.black:visited': {
                        color: dark_1.Content.Text.Primary.Default,
                    },
                    '& a:hover': {
                        color: dark_1.Action.Primary.Hover,
                    },
                },
            },
        },
    },
    graphs: {
        cpu: {
            percent: "rgb(54, 131, 220)",
            system: "rgb(2, 118, 253)",
            user: "rgb(81, 166, 245)",
            wait: "rgb(145, 199, 237)",
        },
        darkGreen: "rgb(16, 162, 29)",
        diskIO: {
            read: "rgb(255, 196, 105)",
            swap: "rgb(238, 44, 44)",
            write: "rgb(255, 179, 77)",
        },
        lightGreen: "rgb(49, 206, 62)",
        purple: "rgb(217, 176, 217)",
        red: "rgb(255, 99, 60)",
        yellow: "rgb(255, 220, 125)",
    },
    inputStyles: {
        default: {
            backgroundColor: dark_1.Select.Default.Background,
            borderColor: dark_1.Select.Default.Border,
            color: dark_1.Select.Default.Text,
        },
        disabled: {
            '& svg': {
                color: dark_1.Select.Disabled.Icon,
            },
            backgroundColor: dark_1.Select.Disabled.Background,
            borderColor: dark_1.Select.Disabled.Border,
            color: dark_1.Select.Disabled.Text,
        },
        error: {
            '& svg': {
                color: dark_1.Select.Error.Icon,
            },
            backgroundColor: dark_1.Select.Error.Background,
            borderColor: dark_1.Select.Error.Border,
            color: dark_1.Select.Error.Text,
        },
        focused: {
            '& svg': {
                color: dark_1.Select.Focus.Icon,
            },
            backgroundColor: dark_1.Select.Focus.Background,
            borderColor: dark_1.Select.Focus.Border,
            boxShadow: "0 0 2px 1px ".concat(dark_1.Color.Neutrals[100]),
            color: dark_1.Select.Focus.Text,
        },
        hover: {
            '& svg': {
                color: dark_1.Select.Hover.Icon,
            },
            backgroundColor: dark_1.Select.Hover.Background,
            borderColor: dark_1.Select.Hover.Border,
            color: dark_1.Select.Hover.Text,
        },
    },
    name: 'dark',
    notificationToast: exports.notificationToast,
    palette: {
        background: {
            default: exports.customDarkModeOptions.bg.app,
            paper: dark_1.Color.Neutrals[90],
        },
        divider: primaryColors.divider,
        error: {
            dark: dark_1.Color.Red[60],
            light: dark_1.Color.Red[10],
            main: dark_1.Color.Red[40],
        },
        mode: 'dark',
        primary: primaryColors,
        text: {
            primary: dark_1.Content.Text.Primary.Default,
        },
    },
    textColors: exports.customDarkModeOptions.textColors,
    tokens: {
        alias: dark_1.Alias,
        color: dark_1.Color,
        component: dark_1.Component,
        font: dark_1.Font,
        spacing: dark_1.Spacing,
    },
    typography: {
        body1: {
            color: dark_1.Content.Text.Primary.Default,
        },
        caption: {
            color: dark_1.Content.Text.Primary.Default,
        },
        h1: {
            color: dark_1.Content.Text.Primary.Default,
        },
        h2: {
            color: dark_1.Content.Text.Primary.Default,
        },
        h3: {
            color: dark_1.Content.Text.Primary.Default,
        },
        subtitle1: {
            color: dark_1.Content.Text.Primary.Default,
        },
    },
};
