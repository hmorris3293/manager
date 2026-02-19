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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = exports.notificationToast = exports.borderColors = exports.textColors = exports.color = exports.bg = void 0;
var design_language_system_1 = require("@linode/design-language-system");
var breakpoints_1 = require("../breakpoints");
var utils_1 = require("../utils");
var inputMaxWidth = 416;
var topMenuHeight = 56;
exports.bg = {
    app: design_language_system_1.Color.Neutrals[5],
    appBar: 'transparent',
    bgAccessRowTransparentGradient: 'rgb(255, 255, 255, .001)',
    bgPaper: design_language_system_1.Color.Neutrals.White,
    interactionBgPrimary: design_language_system_1.Interaction.Background.Secondary,
    lightBlue1: design_language_system_1.Color.Brand[10],
    lightBlue2: design_language_system_1.Color.Brand[40],
    main: design_language_system_1.Color.Neutrals[5],
    mainContentBanner: design_language_system_1.Color.Neutrals[100],
    offWhite: design_language_system_1.Color.Neutrals[5],
    primaryNavPaper: design_language_system_1.Color.Neutrals[100],
    tableHeader: design_language_system_1.Color.Neutrals[10],
    white: design_language_system_1.Color.Neutrals.White,
};
var primaryColors = {
    dark: design_language_system_1.Color.Brand[90],
    divider: design_language_system_1.Color.Neutrals[5],
    headline: design_language_system_1.Color.Neutrals[100],
    light: design_language_system_1.Color.Brand[60],
    main: design_language_system_1.Color.Brand[80],
    text: design_language_system_1.Content.Text.Primary.Default,
    white: design_language_system_1.Color.Neutrals.White,
};
exports.color = {
    black: design_language_system_1.Color.Neutrals.Black,
    blue: design_language_system_1.Color.Brand[80],
    blueDTwhite: design_language_system_1.Color.Brand[80],
    border2: design_language_system_1.Color.Neutrals[40],
    border3: design_language_system_1.Color.Neutrals[20],
    boxShadow: design_language_system_1.Color.Neutrals[30],
    boxShadowDark: design_language_system_1.Color.Neutrals[50],
    buttonPrimaryHover: design_language_system_1.Button.Primary.Hover.Background,
    disabledText: design_language_system_1.Color.Neutrals[40],
    drawerBackdrop: 'rgba(255, 255, 255, 0.5)',
    green: design_language_system_1.Color.Green[70],
    grey1: design_language_system_1.Color.Neutrals[50],
    grey2: design_language_system_1.Color.Neutrals[30],
    grey3: design_language_system_1.Color.Neutrals[40],
    grey4: design_language_system_1.Color.Neutrals[60],
    grey5: design_language_system_1.Color.Neutrals[5],
    grey6: design_language_system_1.Color.Neutrals[30],
    grey7: design_language_system_1.Color.Neutrals[20],
    grey8: design_language_system_1.Color.Neutrals[30],
    grey9: design_language_system_1.Color.Neutrals[5],
    grey10: design_language_system_1.Color.Neutrals[10],
    headline: design_language_system_1.Content.Text.Primary.Default,
    label: design_language_system_1.Color.Neutrals[70],
    offBlack: design_language_system_1.Color.Neutrals[90],
    orange: design_language_system_1.Color.Amber[70],
    red: design_language_system_1.Color.Red[70],
    tableHeaderText: 'rgba(0, 0, 0, 0.54)',
    // TODO: `tagButton*` should be moved to component level.
    tagButtonBg: design_language_system_1.Color.Brand[10],
    tagButtonBgHover: design_language_system_1.Button.Primary.Hover.Background,
    tagButtonText: design_language_system_1.Color.Brand[90],
    tagButtonTextHover: design_language_system_1.Color.Neutrals.White,
    tagIcon: design_language_system_1.Color.Brand[60],
    tagIconHover: design_language_system_1.Button.Primary.Default.Text,
    teal: design_language_system_1.Color.Teal[70],
    white: design_language_system_1.Color.Neutrals.White,
    yellow: design_language_system_1.Color.Yellow[70],
};
exports.textColors = {
    headlineStatic: design_language_system_1.Color.Neutrals[100],
    linkActiveLight: design_language_system_1.Action.Primary.Default,
    linkHover: design_language_system_1.Action.Primary.Hover,
    tableHeader: design_language_system_1.Color.Neutrals[60],
    tableStatic: design_language_system_1.Color.Neutrals[70],
    textAccessTable: design_language_system_1.Color.Neutrals[70],
};
exports.borderColors = {
    borderFocus: design_language_system_1.Interaction.Border.Focus,
    borderHover: design_language_system_1.Interaction.Border.Hover,
    borderTable: design_language_system_1.Color.Neutrals[5],
    borderTypography: design_language_system_1.Color.Neutrals[30],
    divider: design_language_system_1.Color.Neutrals[30],
    dividerDark: design_language_system_1.Color.Neutrals[80],
};
exports.notificationToast = {
    default: {
        backgroundColor: design_language_system_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Informative.IconBackground),
        color: design_language_system_1.NotificationToast.Text,
    },
    error: {
        backgroundColor: design_language_system_1.NotificationToast.Error.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Error.IconBackground),
    },
    info: {
        backgroundColor: design_language_system_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Informative.IconBackground),
    },
    success: {
        backgroundColor: design_language_system_1.NotificationToast.Success.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Success.IconBackground),
    },
    warning: {
        backgroundColor: design_language_system_1.NotificationToast.Warning.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Warning.IconBackground),
    },
    tip: {
        backgroundColor: design_language_system_1.NotificationToast.Informative.Background,
        borderLeft: "48px solid ".concat(design_language_system_1.NotificationToast.Informative.IconBackground),
    },
};
var iconCircleAnimation = {
    '& .circle': {
        fill: primaryColors.main,
        transition: 'fill .2s ease-in-out .2s',
    },
    '& .insidePath *': {
        stroke: design_language_system_1.Color.Neutrals.White,
        transition: 'fill .2s ease-in-out .2s, stroke .2s ease-in-out .2s',
    },
    '& .outerCircle': {
        animation: '$dash 2s linear forwards',
        stroke: primaryColors.dark,
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
    },
};
var iconCircleHoverEffect = {
    '& .circle': {
        fill: primaryColors.main,
    },
    '& .insidePath *': {
        stroke: design_language_system_1.Color.Neutrals.White,
    },
};
// Used for styling html buttons to look like our generic links
var genericLinkStyle = {
    '&:disabled': {
        color: design_language_system_1.Action.Primary.Disabled,
        cursor: 'not-allowed',
    },
    '&:hover:not(:disabled)': {
        backgroundColor: 'transparent',
        color: design_language_system_1.Action.Primary.Hover,
        textDecoration: 'underline',
    },
    background: 'none',
    border: 'none',
    color: design_language_system_1.Action.Primary.Default,
    cursor: 'pointer',
    font: 'inherit',
    minWidth: 0,
    padding: 0,
};
// Used for styling status pills as seen on Linodes
var genericStatusPillStyle = {
    '&:before': {
        borderRadius: '50%',
        content: '""',
        display: 'inline-block',
        height: 16,
        marginRight: 8,
        minWidth: 16,
        width: 16,
    },
    backgroundColor: 'transparent',
    color: exports.textColors.tableStatic,
    font: design_language_system_1.Typography.Body.Bold,
    padding: 0,
};
var genericTableHeaderStyle = {
    '&:hover': {
        '& span': {
            color: exports.textColors.linkActiveLight,
        },
        cursor: 'pointer',
    },
};
var visuallyVisible = {
    clip: 'none',
    height: 'auto',
    overflow: 'initial',
    /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
    position: 'relative',
    width: 'auto',
};
var visuallyHidden = {
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: 1,
    overflow: 'hidden',
    /* https://snook.ca/archives/html_and_css/hiding-content-for-accessibility */
    position: 'absolute !important',
    width: 1,
};
var graphTransparency = '0.7';
var spacing = 8;
var MuiTableHeadSvgStyles = {
    svg: {
        path: {
            fill: design_language_system_1.Color.Brand[90],
        },
    },
};
var MuiTableZebraHoverStyles = {
    '&.MuiTableRow-hover:not(.disabled-row):hover, &.Mui-selected:not(.disabled-row), &.Mui-selected:not(.disabled-row):hover': {
        background: design_language_system_1.Table.Row.Background.Hover,
    },
};
var MuiTableZebraStyles = __assign({ background: design_language_system_1.Table.Row.Background.Zebra }, MuiTableZebraHoverStyles);
var typographyPropertiesReset = {
    fontFamily: undefined,
    fontSize: undefined,
    fontWeight: undefined,
    letterSpacing: undefined,
    lineHeight: undefined,
};
exports.lightTheme = {
    addCircleHoverEffect: __assign({}, iconCircleHoverEffect),
    animateCircleIcon: __assign({}, iconCircleAnimation),
    applyLinkStyles: __assign({}, genericLinkStyle),
    applyStatusPillStyles: __assign({}, genericStatusPillStyle),
    applyTableHeaderStyles: __assign({}, genericTableHeaderStyle),
    bg: exports.bg,
    borderColors: exports.borderColors,
    breakpoints: breakpoints_1.breakpoints,
    color: exports.color,
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    '& .actionPanel': {
                        paddingBottom: 12,
                        paddingLeft: 16,
                    },
                    '&:before': {
                        display: 'none',
                    },
                    flexBasis: '100%',
                    width: '100%',
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    padding: 16,
                    paddingTop: 0,
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                content: {
                    '&.Mui-expanded': {
                        margin: '12px 0',
                    },
                },
                root: {
                    '& h3': {
                        transition: 'color 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '& svg': {
                        fill: design_language_system_1.Color.Brand[80],
                    },
                    '&.Mui-expanded': {
                        '& .caret': {
                            transform: 'rotate(0deg)',
                        },
                        margin: 0,
                        minHeight: 40,
                    },
                    '&:hover': {
                        '& h3': {
                            color: design_language_system_1.Color.Brand[80],
                        },
                    },
                    backgroundColor: 'transparent',
                    justifyContent: 'space-between',
                    paddingLeft: 16,
                    paddingRight: 12,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: design_language_system_1.GlobalHeader.Background,
                    color: design_language_system_1.GlobalHeader.Text.Default,
                    paddingRight: "0 !important", // Avoid MUI from applying right padding causing this to jump
                    position: 'relative',
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                clearIndicator: {
                    color: design_language_system_1.Select.Default.Icon,
                    padding: 0,
                    svg: {
                        height: design_language_system_1.Spacing.S16,
                        width: design_language_system_1.Spacing.S16,
                    },
                    visibility: 'visible',
                },
                endAdornment: {
                    display: 'flex',
                    gap: design_language_system_1.Spacing.S4,
                    marginRight: design_language_system_1.Spacing.S8,
                },
                groupLabel: {
                    marginTop: '0px !important',
                    top: 0,
                    backgroundColor: design_language_system_1.Dropdown.Background.Category,
                    padding: "".concat(design_language_system_1.Spacing.S8, " ").concat(design_language_system_1.Spacing.S12, " !important"),
                },
                input: {
                    '&.MuiInputBase-input.MuiInput-input': {
                        padding: "".concat(design_language_system_1.Spacing.S8, " 0"), // L & R padding applied to parent due to possible adornments
                    },
                },
                inputRoot: {
                    paddingLeft: "".concat(design_language_system_1.Spacing.S12),
                    '& input::placeholder': {
                        color: design_language_system_1.Select.Default.Text,
                        opacity: 1,
                    },
                    height: 'inherit',
                    paddingBottom: 0,
                    '& .fi': {
                        width: design_language_system_1.Spacing.S28,
                        height: design_language_system_1.Spacing.S20,
                        borderRadius: '3px',
                        backgroundSize: 'cover',
                        boxShadow: 'none',
                    },
                },
                paper: {
                    boxShadow: design_language_system_1.Alias.Elevation.S,
                    marginTop: design_language_system_1.Spacing.S4,
                    paddingTop: design_language_system_1.Spacing.S4,
                    paddingBottom: design_language_system_1.Spacing.S4,
                },
                listbox: {
                    backgroundColor: design_language_system_1.Select.Default.Background,
                    paddingTop: design_language_system_1.Spacing.S4,
                    border: 'none',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
                loading: {
                    border: '0px !important',
                    boxShadow: design_language_system_1.Alias.Elevation.S,
                },
                noOptions: {
                    padding: "".concat(design_language_system_1.Spacing.S8, " ").concat(design_language_system_1.Spacing.S12, " !important"),
                    lineHeight: 1.143,
                },
                option: {
                    '&.Mui-focused': {
                        backgroundColor: "".concat(design_language_system_1.Dropdown.Background.Hover, " !important"),
                    },
                    '&:hover': {
                        backgroundColor: "".concat(design_language_system_1.Dropdown.Background.Hover),
                        color: design_language_system_1.Dropdown.Text.Default,
                        transition: 'background-color 0.2s',
                    },
                    fontSize: '0.9rem',
                    '& .fi': {
                        width: design_language_system_1.Spacing.S28,
                        height: design_language_system_1.Spacing.S20,
                        borderRadius: '3px',
                        backgroundSize: 'cover',
                        boxShadow: 'none',
                    },
                    padding: "".concat(design_language_system_1.Spacing.S6, " ").concat(design_language_system_1.Spacing.S12, " !important"),
                },
                popper: {
                    // To remove the double border of listbox and input
                    '&.MuiAutocomplete-popper': {
                        '&[data-popper-placement="bottom"], &[data-popper-placement="top"]': {
                            '.MuiAutocomplete-listbox': {
                                padding: 0,
                                '& .MuiAutocomplete-groupLabel': {
                                    color: design_language_system_1.Dropdown.Text.Default,
                                    font: design_language_system_1.Typography.Heading.Overline,
                                    textTransform: design_language_system_1.Typography.Heading.OverlineTextCase,
                                },
                            },
                            '.MuiAutocomplete-option': {
                                padding: "".concat(design_language_system_1.Spacing.S6, " ").concat(design_language_system_1.Spacing.S12, " !important"),
                                svg: {
                                    height: design_language_system_1.Spacing.S16,
                                    width: design_language_system_1.Spacing.S16,
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
                    color: design_language_system_1.Select.Default.Icon,
                    padding: 0,
                },
                root: {
                    // Spacing for clear and popup icons (circular loading)
                    '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot': {
                        paddingRight: design_language_system_1.Spacing.S48,
                    },
                    maxWidth: inputMaxWidth,
                },
                tag: {
                    '&:not(.MuiChip-root)': {
                        borderRadius: design_language_system_1.Spacing.S4,
                        padding: design_language_system_1.Spacing.S4,
                    },
                    '.MuiChip-deleteIcon': {
                        ':hover': {
                            backgroundColor: primaryColors.main,
                            color: primaryColors.white,
                        },
                        width: 'auto',
                        height: 'auto',
                        borderRadius: '50%',
                        color: design_language_system_1.Content.Text.Primary.Default,
                        fontSize: design_language_system_1.Spacing.S16,
                        margin: "0 ".concat(design_language_system_1.Spacing.S4),
                    },
                    backgroundColor: exports.bg.lightBlue1,
                    padding: "".concat(design_language_system_1.Spacing.S12, " ").concat(design_language_system_1.Spacing.S2),
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    backgroundColor: 'unset',
                    color: design_language_system_1.Color.Neutrals[40], // TODO: This was the closest color according to our palette
                },
            },
        },
        MuiBackdrop: {
            styleOverrides: {
                invisible: {
                    backgroundColor: 'transparent',
                },
                root: {
                    backgroundColor: exports.color.drawerBackdrop,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    '&:active': {
                        backgroundColor: design_language_system_1.Button.Primary.Pressed.Background,
                    },
                    '&:disabled': {
                        backgroundColor: design_language_system_1.Button.Primary.Disabled.Background,
                        color: design_language_system_1.Button.Primary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: design_language_system_1.Button.Primary.Hover.Background,
                        color: design_language_system_1.Button.Primary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: design_language_system_1.Button.Primary.Disabled.Background,
                        color: design_language_system_1.Button.Primary.Disabled.Text,
                    },
                    backgroundColor: design_language_system_1.Button.Primary.Default.Background,
                    border: "1px solid transparent",
                    color: design_language_system_1.Button.Primary.Default.Text,
                },
                containedSecondary: {
                    '&:active': {
                        backgroundColor: 'transparent',
                        borderColor: design_language_system_1.Button.Secondary.Pressed.Text,
                        color: design_language_system_1.Button.Secondary.Pressed.Text,
                    },
                    '&:disabled': {
                        backgroundColor: 'transparent',
                        borderColor: design_language_system_1.Button.Secondary.Disabled.Text,
                        color: design_language_system_1.Button.Secondary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: 'transparent',
                        color: design_language_system_1.Color.Brand[70],
                    },
                    '&[aria-disabled="true"]': {
                        color: design_language_system_1.Color.Neutrals[40],
                    },
                    backgroundColor: 'transparent',
                    color: design_language_system_1.Button.Secondary.Default.Text,
                },
                loading: {
                    color: 'transparent !important',
                },
                outlined: {
                    '&:hover, &:focus': {
                        backgroundColor: design_language_system_1.Button.Secondary.Hover.Background,
                        color: design_language_system_1.Button.Secondary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: 'transparent',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        color: 'rgba(0, 0, 0, 0.26)',
                    },
                    backgroundColor: 'transparent',
                    border: "1px solid ".concat(primaryColors.main),
                    color: exports.textColors.linkActiveLight,
                },
                root: {
                    '&[aria-disabled="true"]': {
                        cursor: 'not-allowed',
                    },
                    '.MuiButton-startIcon': {
                        marginLeft: 0,
                        marginRight: design_language_system_1.Spacing.S4,
                    },
                    border: 'none',
                    borderRadius: 1,
                    cursor: 'pointer',
                    font: design_language_system_1.Typography.Label.Semibold.S,
                    minWidth: 'initial',
                    padding: '8px 12px',
                    textTransform: 'capitalize',
                    transition: 'none',
                },
            },
            variants: [
                {
                    props: { color: 'error' },
                    style: {
                        '&:not([aria-disabled="true"]):hover, &:not([aria-disabled="true"]):focus': {
                            backgroundColor: design_language_system_1.Button.Danger.Hover.Background,
                            border: "1px solid ".concat(design_language_system_1.Button.Danger.Hover.Background),
                            color: design_language_system_1.Button.Danger.Hover.Text,
                        },
                        '&[aria-disabled="true"]': {
                            backgroundColor: design_language_system_1.Button.Danger.Disabled.Background,
                            border: "1px solid ".concat(design_language_system_1.Button.Danger.Disabled.Background),
                            color: design_language_system_1.Button.Danger.Disabled.Text,
                        },
                        backgroundColor: design_language_system_1.Button.Danger.Default.Background,
                        border: "1px solid ".concat(design_language_system_1.Button.Danger.Default.Background),
                        color: design_language_system_1.Button.Danger.Default.Text,
                    },
                },
            ],
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&[aria-disabled="true"]': {
                        '& .MuiSvgIcon-root': {
                            fill: design_language_system_1.Button.Primary.Disabled.Icon,
                        },
                        cursor: 'not-allowed',
                    },
                    fontSize: '1rem',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                content: {
                    // This is necessary for text to ellipsis responsively without the need for a hard set width value that won't play well with flexbox.
                    minWidth: 0,
                },
                root: {
                    backgroundColor: design_language_system_1.Color.Neutrals[5],
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&:active': {
                        color: "".concat(design_language_system_1.Component.Checkbox.Empty.Active.Border, " !important"),
                    },
                    '&:hover': {
                        color: "".concat(design_language_system_1.Component.Checkbox.Empty.Hover.Border, " !important"),
                    },
                    // Checked
                    '&.Mui-checked': {
                        color: design_language_system_1.Component.Checkbox.Checked.Default.Background,
                    },
                    // Indeterminate
                    '&.MuiCheckbox-indeterminate': {
                        color: design_language_system_1.Component.Checkbox.Indeterminated.Default.Background,
                    },
                    // Unchecked & Disabled
                    '&.Mui-disabled': {
                        '& svg': {
                            backgroundColor: design_language_system_1.Component.Checkbox.Empty.Disabled.Background,
                        },
                        color: design_language_system_1.Component.Checkbox.Empty.Disabled.Border,
                        pointerEvents: 'none',
                    },
                    // Checked & Disabled
                    '&.Mui-checked.Mui-disabled': {
                        color: design_language_system_1.Component.Checkbox.Checked.Disabled.Background,
                    },
                    // Indeterminate & Disabled
                    '&.MuiCheckbox-indeterminate.Mui-disabled': {
                        color: design_language_system_1.Component.Checkbox.Indeterminated.Disabled.Background,
                    },
                    color: design_language_system_1.Component.Checkbox.Empty.Default.Border,
                },
            },
            defaultProps: {
                size: 'medium',
            },
            variants: [
                {
                    props: { size: 'small' },
                    style: {
                        svg: {
                            height: '16px',
                            width: '16px',
                        },
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        svg: {
                            height: '20px',
                            width: '20px',
                        },
                    },
                },
            ],
        },
        MuiChip: {
            styleOverrides: {
                // TODO: This will need CDS guidance in future
                clickable: {
                    '&:active': {
                        backgroundColor: design_language_system_1.Button.Primary.Pressed.Background,
                    },
                    '&:disabled': {
                        backgroundColor: design_language_system_1.Button.Primary.Disabled.Background,
                        color: design_language_system_1.Button.Primary.Disabled.Text,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: design_language_system_1.Button.Primary.Hover.Background,
                        color: design_language_system_1.Button.Primary.Default.Text,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: design_language_system_1.Button.Primary.Disabled.Background,
                        color: design_language_system_1.Button.Primary.Disabled.Text,
                    },
                    backgroundColor: design_language_system_1.Button.Primary.Default.Background,
                    border: "1px solid transparent",
                    color: design_language_system_1.Button.Primary.Default.Text,
                },
                colorError: {
                    backgroundColor: design_language_system_1.Color.Red[80],
                    color: design_language_system_1.Color.Neutrals.White,
                },
                colorPrimary: {
                    color: exports.color.white,
                },
                colorSecondary: {
                    color: exports.color.white,
                },
                colorSuccess: {
                    background: design_language_system_1.Color.Green[70],
                    color: exports.color.white,
                },
                deleteIcon: {
                    color: design_language_system_1.Content.Text.Primary.Default,
                    margin: 0,
                    padding: 2,
                },
                label: {
                    alignItems: 'center',
                    display: 'flex',
                    height: 'inherit',
                    justifyContent: 'center',
                    paddingLeft: 4,
                    paddingRight: 4,
                    width: '100%',
                },
                labelSmall: {
                    paddingLeft: 4,
                    paddingRight: 4,
                },
                outlined: {
                    backgroundColor: 'transparent',
                    borderRadius: 1,
                },
                root: {
                    '&:focus': {
                        outline: "1px dotted ".concat(design_language_system_1.Color.Neutrals[60]),
                    },
                    '&:last-child': {
                        marginRight: 0,
                    },
                    alignItems: 'center',
                    borderRadius: 4,
                    color: design_language_system_1.Content.Text.Primary.Default,
                    display: 'inline-flex',
                    fontSize: '.8rem',
                    height: 20,
                    marginBottom: 2,
                    marginRight: 4,
                    marginTop: 2,
                    paddingLeft: 2,
                    paddingRight: 2,
                },
                sizeSmall: {
                    fontSize: '.65rem',
                    height: 20,
                },
            },
        },
        MuiCircularProgress: {
            defaultProps: {
                disableShrink: true,
            },
            styleOverrides: {
                circle: {
                    strokeLinecap: 'inherit',
                },
            },
        },
        MuiCollapse: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: (_a = {
                        boxShadow: "0 0 5px ".concat(design_language_system_1.Color.Neutrals[50])
                    },
                    _a[breakpoints_1.breakpoints.down('sm')] = {
                        margin: 24,
                        maxHeight: 'calc(100% - 48px)',
                        maxWidth: '100% !important',
                    },
                    _a),
                paperScrollPaper: {
                    maxHeight: 'calc(100% - 48px)',
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    '& .actionPanel': {
                        padding: 0,
                    },
                    justifyContent: 'flex-start',
                    margin: 0,
                    marginTop: 24,
                    padding: 24,
                },
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: '8px 24px',
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    '& h2': {
                        lineHeight: 1.2,
                    },
                    borderBottom: "1px solid ".concat(design_language_system_1.Color.Neutrals[20]),
                    color: design_language_system_1.Content.Text.Primary.Default,
                    marginBottom: 20,
                    padding: '16px 24px',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: exports.borderColors.divider,
                    marginBottom: spacing,
                    marginTop: spacing,
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    boxShadow: "0 0 5px ".concat(design_language_system_1.Color.Neutrals[50]), // TODO: This was the closest color according to our palette
                    /** @todo This is breaking typing. */
                    // overflowY: 'overlay',
                    display: 'block',
                    fallbacks: {
                        overflowY: 'auto',
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: (_b = {
                        '&.copy > div': {
                            backgroundColor: design_language_system_1.Color.Neutrals[5],
                        }
                    },
                    _b[breakpoints_1.breakpoints.down('xs')] = {
                        width: '100%',
                    },
                    _b.marginTop = 16,
                    _b.minWidth = 120,
                    _b),
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    color: design_language_system_1.Content.Text.Primary.Default,
                },
                root: {
                    marginLeft: -11,
                },
            },
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    '&[role="radiogroup"]': {
                        marginBottom: 16,
                        marginTop: 8,
                    },
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    '&$error': {
                        color: design_language_system_1.Select.Error.HintText,
                    },
                    fontWeight: design_language_system_1.Font.FontWeight.Semibold,
                    letterSpacing: 'inherit',
                    maxWidth: 416,
                    textTransform: 'none',
                    marginTop: '4px',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&$disabled': {
                        color: design_language_system_1.Component.Label.Text,
                        opacity: 0.5,
                    },
                    '&$error': {
                        color: design_language_system_1.Component.Label.Text,
                    },
                    '&.Mui-focused': {
                        color: design_language_system_1.Component.Label.Text,
                    },
                    color: design_language_system_1.Component.Label.Text,
                    font: design_language_system_1.Typography.Body.Bold,
                    marginBottom: 8,
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: 'large',
            },
            styleOverrides: {
                edgeEnd: {
                    marginRight: 0,
                },
                root: {
                    '&.MuiIconButton-isActive': {
                        svg: {
                            path: {
                                fill: design_language_system_1.Content.Icon.Primary.Active,
                            },
                        },
                    },
                    '&:hover': {
                        backgroundColor: 'transparent',
                        color: design_language_system_1.Content.Icon.Primary.Hover,
                    },
                },
            },
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: true,
            },
        },
        MuiInputAdornment: {
            styleOverrides: {
                positionEnd: {
                    display: 'flex',
                    gap: design_language_system_1.Spacing.S4,
                    marginLeft: design_language_system_1.Spacing.S8,
                    svg: {
                        fontSize: design_language_system_1.Font.FontSize.L,
                    },
                },
                positionStart: {
                    marginRight: design_language_system_1.Spacing.S8,
                    svg: {
                        fontSize: design_language_system_1.Font.FontSize.L,
                    },
                },
                root: {
                    color: design_language_system_1.Search.Filled.Icon,
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                adornedEnd: {
                    // Similar to `clearIndicator` in `MuiAutocomplete`
                    // Assuming this is for the clear/close icon in `DebouncedSearchTextField`. Update if this changes.
                    '.MuiInputAdornment-positionEnd': {
                        svg: {
                            height: '16px',
                            width: '16px',
                        },
                    },
                },
                input: {
                    '&::placeholder': {
                        color: design_language_system_1.TextField.Placeholder.Text,
                        font: design_language_system_1.Typography.Label.Regular.Placeholder,
                        fontStyle: 'italic',
                        opacity: 1,
                    },
                    '&:disabled, &.Mui-disabled': {
                        cursor: 'not-allowed',
                    },
                    height: design_language_system_1.Spacing.S16,
                    padding: "".concat(design_language_system_1.Spacing.S8, " 0"), // L & R padding applied to parent due to possible adornments
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                },
                inputMultiline: {
                    minHeight: '100px',
                },
                multiline: {
                    height: 'auto',
                },
                root: {
                    '&.Mui-error': {
                        backgroundColor: design_language_system_1.TextField.Error.Background,
                        borderColor: design_language_system_1.TextField.Error.Border,
                        color: design_language_system_1.TextField.Error.Text,
                    },
                    '&:active, &:focus, &.Mui-focused, &.Mui-focused:hover': {
                        backgroundColor: design_language_system_1.TextField.Focus.Background,
                        border: "1px solid ".concat(design_language_system_1.TextField.Focus.Border),
                        color: design_language_system_1.TextField.Focus.Text,
                    },
                    '&:disabled, &[aria-disabled="true"], &.Mui-disabled, &.Mui-disabled:hover': {
                        '& .MuiInputAdornment-root': {
                            cursor: 'not-allowed',
                        },
                        backgroundColor: design_language_system_1.TextField.Disabled.Background,
                        border: "1px solid ".concat(design_language_system_1.TextField.Disabled.Border),
                        color: design_language_system_1.TextField.Disabled.Text,
                        cursor: 'not-allowed',
                    },
                    '&:hover': {
                        backgroundColor: design_language_system_1.TextField.Hover.Background,
                        border: "1px solid ".concat(design_language_system_1.TextField.Hover.Border),
                        color: design_language_system_1.TextField.Hover.Text,
                    },
                    background: design_language_system_1.TextField.Default.Background,
                    border: "1px solid ".concat(design_language_system_1.TextField.Default.Border),
                    color: design_language_system_1.TextField.Filled.Text,
                    font: design_language_system_1.Typography.Label.Regular.S,
                    height: '34px',
                    maxWidth: inputMaxWidth,
                    paddingLeft: design_language_system_1.Spacing.S8,
                    paddingRight: design_language_system_1.Spacing.S8,
                    transition: 'border-color 225ms ease-in-out',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                formControl: {
                    position: 'relative',
                },
                shrink: {
                    transform: 'none',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: design_language_system_1.Color.Brand[40], // TODO: This was the closest color according to our palette
                },
            },
        },
        MuiList: {
            styleOverrides: {
                padding: {
                    paddingBottom: 0,
                    paddingTop: 0,
                },
                root: {
                    '&.reset': {
                        '& li': {
                            display: 'list-item',
                            listStyleType: 'initial',
                            padding: 0,
                        },
                        listStyle: 'initial',
                        margin: 'inherit',
                        padding: 'inherit',
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    '&$disabled': {
                        opacity: 0.5,
                    },
                    '&$selected, &$selected:hover': {
                        backgroundColor: 'transparent',
                        color: primaryColors.main,
                    },
                    '&.selectHeader': {
                        color: design_language_system_1.Content.Text.Primary.Default,
                        font: design_language_system_1.Typography.Body.Bold,
                        opacity: 1,
                    },
                    color: design_language_system_1.Content.Text.Primary.Default,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginBottom: 0,
                    marginTop: 0,
                },
                secondary: {
                    lineHeight: '1.2em',
                    marginTop: 4,
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    '& .selectMenuList': (_c = {
                            '& li': {
                                paddingLeft: 10,
                                paddingRight: 10,
                            },
                            boxSizing: 'content-box'
                        },
                        _c[breakpoints_1.breakpoints.down('xs')] = {
                            minWidth: 200,
                        },
                        _c.maxHeight = 250,
                        _c.maxWidth = 200,
                        _c.overflowX = 'hidden',
                        _c.overflowY = 'auto',
                        _c.padding = 4,
                        _c),
                    '&.selectMenuDropdown': {
                        border: "1px solid ".concat(primaryColors.main),
                        borderRadius: 0,
                        boxShadow: 'none',
                        boxSizing: 'content-box',
                        margin: '0 0 0 -1px',
                        outline: 0,
                        position: 'absolute',
                    },
                    borderLeft: 0,
                    borderRight: 0,
                    maxWidth: 350,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&.loading': {
                        backgroundColor: design_language_system_1.Content.Text.Primary.Default,
                    },
                    '&:active': {
                        backgroundColor: design_language_system_1.Dropdown.Background.Default,
                    },
                    '&:disabled': {
                        backgroundColor: design_language_system_1.Dropdown.Background.Default,
                        color: design_language_system_1.Dropdown.Text.Disabled,
                    },
                    '&:hover, &:focus': {
                        backgroundColor: design_language_system_1.Dropdown.Background.Hover,
                        color: design_language_system_1.Dropdown.Text.Default,
                    },
                    '&:last-child)': {
                        borderBottom: 0,
                    },
                    '&[aria-disabled="true"]': {
                        backgroundColor: design_language_system_1.Dropdown.Background.Default,
                        color: design_language_system_1.Dropdown.Text.Disabled,
                        opacity: 1,
                    },
                    backgroundColor: design_language_system_1.Dropdown.Background.Default,
                    color: design_language_system_1.Dropdown.Text.Default,
                    padding: '10px 10px 10px 16px',
                },
                selected: {},
            },
        },
        MuiPaper: {
            styleOverrides: {
                outlined: {
                    border: "1px solid ".concat(design_language_system_1.Color.Neutrals[30]),
                },
                root: {
                    '& .notice': {
                        width: 'fit-content',
                    },
                },
                rounded: {
                    borderRadius: 0,
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: (_d = {
                        borderRadius: 0,
                        boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.18)"
                    },
                    _d[breakpoints_1.breakpoints.up('lg')] = {
                        minWidth: 250,
                    },
                    _d.marginTop = design_language_system_1.Spacing.S4,
                    _d.minWidth = 200,
                    _d),
            },
        },
        MuiRadio: {
            styleOverrides: {
                checked: function (_a) {
                    var theme = _a.theme;
                    return ({
                        color: theme.palette.primary.main,
                    });
                },
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
                root: function (_a) {
                    var theme = _a.theme;
                    return ({
                        '& svg circle': {
                            fill: theme.tokens.component.RadioButton.Inactive.Default
                                .Background,
                            stroke: theme.tokens.component.RadioButton.Inactive.Default.Border,
                        },
                        '&.Mui-checked svg circle': {
                            fill: theme.tokens.component.RadioButton.Active.Default.Background,
                            stroke: theme.tokens.component.RadioButton.Active.Default.Border,
                        },
                        '&.Mui-disabled svg circle': {
                            fill: theme.tokens.component.RadioButton.Inactive.Disabled
                                .Background,
                            stroke: theme.tokens.component.RadioButton.Inactive.Disabled.Border,
                        },
                        '&.Mui-checked.Mui-disabled svg circle': {
                            fill: theme.tokens.component.RadioButton.Active.Disabled.Background,
                            stroke: theme.tokens.component.RadioButton.Active.Disabled.Border,
                        },
                        '&:hover:not(.Mui-disabled) svg circle': {
                            fill: theme.tokens.component.RadioButton.Inactive.Hover.Background,
                            stroke: theme.tokens.component.RadioButton.Inactive.Hover.Border,
                        },
                        '&.Mui-checked:hover:not(.Mui-disabled) svg circle': {
                            fill: theme.tokens.component.RadioButton.Active.Hover.Background,
                            stroke: theme.tokens.component.RadioButton.Active.Hover.Border,
                        },
                        padding: '10px 10px',
                        '&.MuiRadio-sizeSmall': {
                            '.MuiSvgIcon-fontSizeSmall': {
                                fontSize: '16px',
                            },
                        },
                    });
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                disabled: {},
                icon: {
                    color: "".concat(design_language_system_1.Select.Disabled.Icon, " !important"),
                    height: 28,
                    marginRight: 4,
                    marginTop: -2,
                    opacity: 0.5,
                    transition: 'color 225ms ease-in-out',
                    width: 28,
                },
                select: {
                    '&:focus': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                text: {
                    borderRadius: 0,
                    marginTop: 0,
                },
            },
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {},
            },
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: design_language_system_1.Color.Neutrals.White,
                    borderLeft: "6px solid transparent",
                    borderRadius: 4,
                    boxShadow: "0 0 5px ".concat(design_language_system_1.Color.Neutrals[30]),
                    color: design_language_system_1.Color.Neutrals[70],
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: 20,
                },
            },
        },
        MuiSwitch: {
            styleOverrides: {
                checked: {},
                disabled: {},
                root: {
                    '& $checked': {
                        '& .square': {
                            fill: design_language_system_1.Color.Neutrals.White,
                        },
                        // color: `${primaryColors.main} !important`,
                        '& input': {
                            left: -20,
                        },
                        '&$switchBase': {
                            '& + $track': {
                                opacity: 1,
                            },
                        },
                    },
                    '& $disabled': {
                        '&$switchBase': {
                            '& + $track': {
                                backgroundColor: design_language_system_1.Color.Neutrals[30],
                                borderColor: design_language_system_1.Color.Neutrals[40],
                            },
                            '& .square': {
                                fill: design_language_system_1.Color.Neutrals.White,
                            },
                        },
                    },
                    '& .icon': {
                        borderRadius: 1,
                        height: 16,
                        left: 0,
                        position: 'relative',
                        transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        width: 16,
                    },
                    '& .square': {
                        fill: design_language_system_1.Color.Neutrals.White,
                        transition: 'fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                    '&:hover, &:focus': {
                        '& $checked': {
                            '& + $track': {
                                opacity: 1,
                            },
                        },
                    },
                    '.MuiSwitch-track': {
                        opacity: '1 !important',
                    },
                    height: 48,
                    width: 68,
                },
                switchBase: {
                    '&$checked': {
                        transform: 'translateX(20px)',
                    },
                    '&.Mui-disabled': {
                        '& +.MuiSwitch-track': {
                            backgroundColor: design_language_system_1.Color.Neutrals[30],
                            borderColor: design_language_system_1.Color.Neutrals[40],
                        },
                    },
                    color: primaryColors.main,
                    padding: 16,
                },
                track: {
                    backgroundColor: design_language_system_1.Color.Neutrals[40],
                    borderRadius: 1,
                    boxSizing: 'content-box',
                    height: 24,
                    left: 12,
                    marginLeft: 0,
                    marginTop: 0,
                    opacity: 1,
                    top: 12,
                    transition: 'border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    width: 44,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: (_e = {
                        '&$selected, &$selected:hover': {
                            color: design_language_system_1.Content.Text.Primary.Default,
                            font: design_language_system_1.Typography.Body.Bold,
                        },
                        '&:hover': {
                            color: primaryColors.main,
                        },
                        alignItems: 'center',
                        appearance: 'none',
                        boxSizing: 'border-box'
                    },
                    _e[breakpoints_1.breakpoints.up('md')] = {
                        minWidth: 75,
                    },
                    _e.color = 'rgba(0, 0, 0, 0.54)',
                    _e.display = 'inline-flex',
                    _e.flexShrink = 0,
                    _e.justifyContent = 'center',
                    _e.lineHeight = 1.3,
                    _e.margin = 1,
                    _e.maxWidth = '264',
                    _e.minHeight = 48,
                    _e.minWidth = 50,
                    _e.overflow = 'hidden',
                    _e.padding = '6px 16px',
                    _e.position = 'relative',
                    _e.textTransform = 'inherit',
                    _e.verticalAlign = 'middle',
                    _e),
                selected: {},
                textColorPrimary: {
                    '&$selected': {
                        color: design_language_system_1.Color.Neutrals[100],
                    },
                },
            },
        },
        MuiTable: {
            styleOverrides: {
                root: {
                    // Group by Tag
                    '&.MuiTable-groupByTag': {
                        '.MuiTableRow-root:last-child': {
                            '.MuiTableCell-root': {
                                borderBottom: 0,
                            },
                        },
                        border: 0,
                    },
                    // Zebra Striping
                    '&.MuiTable-zebra': {
                        // Linodes Group by Tag: First Row is the Title
                        '&.MuiTable-groupByTag .MuiTableRow-root:not(:first-of-type):nth-of-type(odd)': MuiTableZebraStyles,
                        // Default Striping
                        '&:not(.MuiTable-groupByTag) .MuiTableRow-root:not(.MuiTableRow-nested):nth-of-type(even)': MuiTableZebraStyles,
                        '.MuiTableRow-root:not(:last-of-type)': {
                            '.MuiTableCell-root': {
                                borderBottom: 0,
                            },
                        },
                    },
                    // Nested Tables
                    '.MuiTable-root': {
                        '.MuiTableCell-head': {
                            color: design_language_system_1.Table.HeaderOutlined.Text,
                        },
                        '.MuiTableRow-head, .MuiTableRow-head.MuiTableRow-hover:hover': {
                            background: design_language_system_1.Background.Neutralsubtle,
                        },
                        '.MuiTableRow-root:last-child': {
                            '.MuiTableCell-root': {
                                borderBottom: 0,
                            },
                        },
                        border: 0,
                    },
                    // Collapsible Rows
                    '.MuiTableRow-root:not(:last-of-type) .MuiCollapse-root': {
                        borderBottom: "1px solid ".concat(design_language_system_1.Border.Normal),
                    },
                    border: "1px solid ".concat(design_language_system_1.Border.Normal),
                    borderBottom: 0,
                    borderCollapse: 'initial',
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    '&:last-of-type': {
                        borderRight: 'none',
                    },
                    // User Permissions Table
                    '.MuiFormControlLabel-label': {
                        color: design_language_system_1.Table.HeaderNested.Text,
                    },
                    // Icons in TH (i.e.: Summary View, Group by Tag)
                    '.MuiIconButton-root': {
                        '&.MuiIconButton-isActive': MuiTableHeadSvgStyles,
                        ':hover': __assign({ color: design_language_system_1.Color.Brand[60] }, MuiTableHeadSvgStyles),
                    },
                    borderBottom: "1px solid ".concat(design_language_system_1.Border.Normal),
                    color: design_language_system_1.Table.HeaderNested.Text,
                    fontWeight: design_language_system_1.Font.FontWeight.Bold,
                    lineHeight: design_language_system_1.Font.LineHeight.Xxxs,
                    whiteSpace: 'noWrap',
                },
                root: {
                    '&.MuiTableCell-nested': {
                        '.MuiCollapse-root': {
                            borderBottom: "1px solid ".concat(design_language_system_1.Border.Normal),
                        },
                        border: 0,
                        height: 'inherit', // Override default height - hidden by default
                        padding: 0,
                    },
                    // Spacing for collapsible inner content
                    '.MuiCollapse-root': {
                        padding: design_language_system_1.Spacing.S16,
                    },
                    borderBottom: "1px solid ".concat(design_language_system_1.Table.Row.Border),
                    fontSize: design_language_system_1.Font.FontSize.Xs,
                    height: '40px',
                    lineHeight: design_language_system_1.Font.LineHeight.Xs,
                    padding: "0 ".concat(design_language_system_1.Spacing.S12),
                },
                stickyHeader: {
                    // No idea where sticky cells are getting their background from
                    background: 'transparent',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                head: {
                    background: design_language_system_1.Table.HeaderNested.Background,
                },
                root: {
                    // Prevent needing `hover={false}` on header TableRows
                    '&.MuiTableRow-head.MuiTableRow-hover:hover': {
                        backgroundColor: design_language_system_1.Table.HeaderNested.Background,
                    },
                    // The `hover` rule isn't implemented correctly in MUI, so we apply it here.
                    '&.MuiTableRow-hover:not(.disabled-row):hover, &.Mui-selected:not(.disabled-row), &.Mui-selected:not(.disabled-row):hover': {
                        backgroundColor: design_language_system_1.Table.Row.Background.Hover,
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
                        backgroundColor: design_language_system_1.Table.Row.Background.Default,
                    },
                    '&.disabled-row .MuiTableCell-root': {
                        // TODO: Use design tokens in future when ready
                        color: design_language_system_1.Content.Text.Primary.Disabled,
                    },
                    background: design_language_system_1.Table.Row.Background.Default,
                    position: 'relative',
                },
            },
        },
        MuiTableSortLabel: {
            styleOverrides: {
                icon: {
                    opacity: 1,
                },
                root: {
                    '&.Mui-active': {
                        color: design_language_system_1.Table.HeaderNested.Text,
                    },
                    ':hover, :focus': __assign(__assign({}, MuiTableHeadSvgStyles), { color: design_language_system_1.Color.Brand[90], cursor: 'pointer' }),
                    fontSize: design_language_system_1.Font.FontSize.Xs,
                    svg: {
                        height: '16px',
                        margin: "0 ".concat(design_language_system_1.Spacing.S4),
                        path: {
                            fill: design_language_system_1.Table.HeaderNested.Text,
                        },
                        width: '16px',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                fixed: {
                    overflowX: 'auto',
                },
                indicator: {
                    primary: {
                        backgroundColor: primaryColors.main,
                    },
                    secondary: {
                        backgroundColor: primaryColors.main,
                    },
                },
                root: {
                    '& $scrollButtons:first-of-type': {
                        '& svg': {
                            backgroundColor: 'rgba(232, 232, 232, .9)',
                            borderRadius: '50%',
                            height: 39,
                            padding: '7px 4px',
                            width: 38,
                        },
                        bottom: 6,
                        left: 0,
                        position: 'absolute',
                        zIndex: 2,
                    },
                    '& $scrollButtons:last-child': {
                        '& svg': {
                            backgroundColor: 'rgba(232, 232, 232, .9)',
                            borderRadius: '50%',
                            height: 39,
                            padding: '7px 4px',
                            width: 38,
                        },
                    },
                    boxShadow: "inset 0 -1px 0 ".concat(design_language_system_1.Color.Neutrals[40]),
                    margin: '16px 0',
                    minHeight: 48,
                    position: 'relative',
                },
                scrollButtons: {
                    flex: '0 0 40px',
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: (_f = {},
                    _f[breakpoints_1.breakpoints.down('md')] = {
                        padding: "0 ".concat(design_language_system_1.Spacing.S8),
                    },
                    _f[breakpoints_1.breakpoints.up('md')] = {
                        padding: "0 ".concat(design_language_system_1.Spacing.S16), // To override default MUI breakpoint padding
                    },
                    _f.height = topMenuHeight,
                    _f.width = '100%',
                    _f),
            },
        },
        MuiTooltip: {
            styleOverrides: {
                popper: {
                    opacity: 1,
                },
                tooltip: (_g = {
                        backgroundColor: design_language_system_1.Color.Neutrals.White,
                        borderRadius: 0,
                        boxShadow: "0 0 5px ".concat(design_language_system_1.Color.Neutrals[50])
                    },
                    _g[breakpoints_1.breakpoints.up('sm')] = {
                        fontSize: '.9rem',
                        padding: '8px 10px',
                    },
                    _g.color = design_language_system_1.Color.Neutrals[70],
                    _g.maxWidth = 200,
                    _g.textAlign = 'left',
                    _g),
            },
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: design_language_system_1.Font.FontFamily.Brand,
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                },
            },
            styleOverrides: {
                button: (_h = {
                        '&$colorSecondary': {
                            '&:active': {
                                backgroundColor: 'transparent',
                                color: primaryColors.light,
                            },
                            '&:hover, &:focus': {
                                backgroundColor: 'transparent !important',
                                color: primaryColors.light,
                            },
                            backgroundColor: 'transparent',
                            color: primaryColors.main,
                        },
                        '&:active': {
                            backgroundColor: primaryColors.light,
                        },
                        '&:hover, &:focus': {
                            backgroundColor: primaryColors.light,
                        },
                        backgroundColor: primaryColors.main,
                        border: 'none',
                        borderRadius: '3px'
                    },
                    _h[breakpoints_1.breakpoints.down('sm')] = {
                        marginLeft: 8,
                        maxHeight: 34,
                        minWidth: 100,
                    },
                    _h.color = design_language_system_1.Color.Neutrals.White,
                    _h.cursor = 'pointer',
                    _h.font = design_language_system_1.Typography.Body.Bold,
                    _h.lineHeight = 1,
                    _h.maxHeight = 34,
                    _h.minHeight = "34px",
                    _h.padding = "8px 20px",
                    _h.position = 'relative',
                    _h.textTransform = 'inherit',
                    _h),
            },
        },
    },
    font: {
        bold: design_language_system_1.Typography.Body.Bold,
        extrabold: design_language_system_1.Typography.Body.Extrabold,
        italic: design_language_system_1.Typography.Body.Italic,
        list: design_language_system_1.Typography.Body.List,
        normal: design_language_system_1.Typography.Body.Regular,
        semibold: design_language_system_1.Typography.Body.Semibold,
    },
    graphs: {
        aborted: {
            clients: "rgba(214, 0, 0, ".concat(graphTransparency, ")"),
            connections: "rgba(255, 10, 10, ".concat(graphTransparency, ")"),
        },
        blue: "rgba(100, 173, 246, ".concat(graphTransparency, ")"),
        connections: {
            accepted: "rgba(91, 105, 139, ".concat(graphTransparency, ")"),
            handled: "rgba(50, 59, 77, ".concat(graphTransparency, ")"),
        },
        cpu: {
            percent: "rgba(54, 131, 220, ".concat(graphTransparency, ")"),
            system: "rgba(2, 118, 253, ".concat(graphTransparency, ")"),
            user: "rgba(81, 166, 245, ".concat(graphTransparency, ")"),
            wait: "rgba(145, 199, 237, ".concat(graphTransparency, ")"),
        },
        darkGreen: "rgba(16, 162, 29, ".concat(graphTransparency, ")"),
        diskIO: {
            read: "rgba(255, 196, 105, ".concat(graphTransparency, ")"),
            swap: "rgba(238, 44, 44, ".concat(graphTransparency, ")"),
            write: "rgba(255, 179, 77, ".concat(graphTransparency, ")"),
        },
        green: "rgba(91, 215, 101, ".concat(graphTransparency, ")"),
        inodes: "rgba(224, 138, 146, ".concat(graphTransparency, ")"),
        lightGreen: "rgba(49, 206, 62, ".concat(graphTransparency, ")"),
        load: "rgba(255, 220, 77, ".concat(graphTransparency, ")"),
        memory: {
            buffers: "rgba(142, 56, 142, ".concat(graphTransparency, ")"),
            cache: "rgba(205, 150, 205, ".concat(graphTransparency, ")"),
            swap: "rgba(238, 44, 44, ".concat(graphTransparency, ")"),
            used: "rgba(236, 200, 236, ".concat(graphTransparency, ")"),
        },
        orange: "rgba(255, 179, 77, ".concat(graphTransparency, ")"),
        processCount: "rgba(113, 86, 245, ".concat(graphTransparency, ")"),
        purple: "rgba(217, 176, 217, ".concat(graphTransparency, ")"),
        queries: {
            delete: "rgba(2, 54, 59, ".concat(graphTransparency, ")"),
            insert: "rgba(26, 151, 162, ".concat(graphTransparency, ")"),
            select: "rgba(34, 192, 206, ".concat(graphTransparency, ")"),
            update: "rgba(19, 110, 118, ".concat(graphTransparency, ")"),
        },
        ram: "rgba(224, 131, 224, ".concat(graphTransparency, ")"),
        red: "rgba(255, 99, 60, ".concat(graphTransparency, ")"),
        requests: "rgba(34, 206, 182, ".concat(graphTransparency, ")"),
        slowQueries: "rgba(255, 61, 61, ".concat(graphTransparency, ")"),
        space: "rgba(255, 99, 61, ".concat(graphTransparency, ")"),
        workers: {
            DNSLookup: "rgba(143, 133, 218, ".concat(graphTransparency, ")"),
            cleanup: "rgba(152, 97, 189, ".concat(graphTransparency, ")"),
            closing: "rgba(145, 124, 211, ".concat(graphTransparency, ")"),
            finishing: "rgba(149, 106, 196, ".concat(graphTransparency, ")"),
            keepAlive: "rgba(141, 143, 225, ".concat(graphTransparency, ")"),
            logging: "rgba(147, 115, 203, ".concat(graphTransparency, ")"),
            reading: "rgba(137, 161, 240, ".concat(graphTransparency, ")"),
            sending: "rgba(139, 152, 233, ".concat(graphTransparency, ")"),
            starting: "rgba(135, 170, 247, ".concat(graphTransparency, ")"),
            waiting: "rgba(133, 180, 255, ".concat(graphTransparency, ")"),
            writing: "rgba(32, 131, 75, ".concat(graphTransparency, ")"),
        },
        yellow: "rgba(255, 220, 125, ".concat(graphTransparency, ")"),
    },
    inputMaxWidth: inputMaxWidth,
    inputStyles: {
        default: {
            backgroundColor: design_language_system_1.Select.Default.Background,
            border: "1px solid ".concat(design_language_system_1.Color.Neutrals[40]), // TODO: This should convert to token in future
            color: design_language_system_1.Select.Default.Text,
        },
        disabled: {
            '& svg': {
                color: design_language_system_1.Select.Disabled.Icon,
            },
            backgroundColor: design_language_system_1.Select.Disabled.Background,
            border: "1px solid ".concat(design_language_system_1.Select.Disabled.Border),
            color: design_language_system_1.Select.Disabled.Text,
        },
        error: {
            '& svg': {
                color: design_language_system_1.Select.Error.Icon,
            },
            backgroundColor: design_language_system_1.Select.Error.Background,
            border: "1px solid ".concat(design_language_system_1.Select.Error.Border),
            color: design_language_system_1.Select.Error.Text,
        },
        focused: {
            '& svg': {
                color: design_language_system_1.Select.Focus.Icon,
            },
            backgroundColor: design_language_system_1.Select.Focus.Background,
            border: "1px solid ".concat(design_language_system_1.Select.Focus.Border),
            boxShadow: "0 0 2px 1px ".concat(design_language_system_1.Color.Neutrals[30]),
            color: design_language_system_1.Select.Focus.Text,
        },
        hover: {
            '& svg': {
                color: design_language_system_1.Select.Hover.Icon,
            },
            backgroundColor: design_language_system_1.Select.Hover.Background,
            border: "1px solid ".concat(design_language_system_1.Color.Neutrals[40]), // TODO: This should convert to token in future
            color: design_language_system_1.Select.Hover.Text,
        },
    },
    name: 'light', // @todo remove this because we leverage pallete.mode now
    notificationToast: exports.notificationToast,
    palette: {
        background: {
            default: exports.bg.app,
        },
        divider: primaryColors.divider,
        error: {
            dark: design_language_system_1.Color.Red[70],
            light: design_language_system_1.Color.Red[10],
            main: design_language_system_1.Color.Red[40],
        },
        info: {
            dark: design_language_system_1.Color.Ultramarine[70],
            light: design_language_system_1.Color.Ultramarine[10],
            main: design_language_system_1.Color.Ultramarine[40],
        },
        mode: 'light',
        primary: primaryColors,
        secondary: primaryColors,
        success: {
            dark: design_language_system_1.Color.Green[70],
            light: design_language_system_1.Color.Green[10],
            main: design_language_system_1.Color.Green[40],
        },
        text: {
            primary: design_language_system_1.Content.Text.Primary.Default,
        },
        warning: {
            dark: design_language_system_1.Color.Amber[70],
            light: design_language_system_1.Color.Amber[10],
            main: design_language_system_1.Color.Amber[40],
        },
    },
    shadows: [
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
    spacing: 8,
    spacingFunction: utils_1.spacingFunction,
    textColors: exports.textColors,
    tokens: {
        alias: design_language_system_1.Alias,
        color: design_language_system_1.Color,
        component: design_language_system_1.Component,
        font: design_language_system_1.Font,
        spacing: design_language_system_1.Spacing,
    },
    typography: {
        body1: __assign(__assign({}, typographyPropertiesReset), { color: design_language_system_1.Content.Text.Primary.Default, font: design_language_system_1.Typography.Body.Regular }),
        caption: __assign(__assign({}, typographyPropertiesReset), { color: design_language_system_1.Content.Text.Primary.Default, font: design_language_system_1.Typography.Heading.Overline, letterSpacing: design_language_system_1.Typography.Heading.OverlineLetterSpacing, textTransform: design_language_system_1.Typography.Heading.OverlineTextCase }),
        fontFamily: design_language_system_1.Font.FontFamily.Brand,
        fontSize: undefined,
        h1: __assign(__assign({}, typographyPropertiesReset), (_j = {}, _j[breakpoints_1.breakpoints.up('lg')] = {
            font: design_language_system_1.Typography.Heading.Xl,
        }, _j.color = design_language_system_1.Content.Text.Primary.Default, _j.font = design_language_system_1.Typography.Heading.L, _j)),
        h2: __assign(__assign({}, typographyPropertiesReset), { color: design_language_system_1.Content.Text.Primary.Default, font: design_language_system_1.Typography.Heading.M }),
        h3: __assign(__assign({}, typographyPropertiesReset), { color: design_language_system_1.Content.Text.Primary.Default, font: design_language_system_1.Typography.Heading.S }),
        htmlFontSize: undefined,
        subtitle1: __assign(__assign({}, typographyPropertiesReset), { color: design_language_system_1.Content.Text.Primary.Default, font: design_language_system_1.Typography.Heading.Xs }),
    },
    visually: {
        hidden: visuallyHidden,
        visible: visuallyVisible,
    },
};
