"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditableText = void 0;
var ui_1 = require("@linode/ui");
var Check_1 = require("@mui/icons-material/Check");
var Edit_1 = require("@mui/icons-material/Edit");
var react_1 = require("react");
var mui_1 = require("tss-react/mui");
var Button_1 = require("../Button");
var ClickAwayListener_1 = require("../ClickAwayListener");
var H1Header_1 = require("../H1Header");
var TextField_1 = require("../TextField");
var useStyles = (0, mui_1.makeStyles)()(function (theme, _params, classes) {
    var _a, _b, _c, _d;
    return ({
        button: {
            '&[aria-label="Save"]': (_a = {
                    marginLeft: theme.spacing(2)
                },
                _a[theme.breakpoints.down('md')] = {
                    marginLeft: theme.spacing(2),
                },
                _a),
            background: 'transparent !important',
            height: 34,
            marginLeft: 0,
            minWidth: 'auto',
            paddingLeft: 6,
            paddingRight: 6,
        },
        container: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
            position: 'relative',
        },
        editIcon: (_b = {},
            _b[theme.breakpoints.up('sm')] = {
                '&:focus': {
                    opacity: 1,
                },
                opacity: 0,
            },
            _b),
        icon: {
            '&:hover, &:focus': {
                color: theme.palette.primary.light,
            },
            color: theme.palette.text.primary,
            fontSize: '1.25rem',
            minHeight: 34,
        },
        initial: {
            '&:hover, &:focus': (_c = {},
                _c["& .".concat(classes.editIcon)] = {
                    opacity: 1,
                },
                _c["& .".concat(classes.icon)] = {
                    '&:hover': {
                        color: theme.color.black,
                    },
                    color: theme.color.grey1,
                },
                _c),
            borderLeft: '1px solid transparent',
        },
        input: {
            font: theme.font.bold,
            fontSize: '1.125rem',
            padding: 0,
            paddingLeft: 2,
        },
        inputRoot: (_d = {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                marginLeft: 7
            },
            _d[theme.breakpoints.up('md')] = {
                maxWidth: 415,
                width: '100%',
            },
            _d),
        root: {
            border: '1px solid transparent',
            color: theme.textColors.tableStatic,
            display: 'inline-block',
            fontSize: '1.125rem !important',
            lineHeight: 1,
            padding: '5px 8px',
            textDecoration: 'inherit',
            transition: theme.transitions.create(['opacity']),
            wordBreak: 'break-all',
        },
        textField: {
            margin: 0,
        },
        underlineOnHover: {
            '&:hover, &:focus': {
                textDecoration: 'underline !important',
            },
        },
        breadcrumbText: {
            color: theme.tokens.component.Breadcrumb.Normal.Text.Default,
            fontSize: '1rem !important',
            paddingBottom: 0,
            paddingLeft: 0,
            paddingTop: 0,
        },
    });
});
var EditableText = function (props) {
    var _a, _b;
    var _c = useStyles(), classes = _c.classes, cx = _c.cx;
    var _d = react_1.default.useState(Boolean(props.errorText)), isEditing = _d[0], setIsEditing = _d[1];
    var _e = react_1.default.useState(props.text), text = _e[0], setText = _e[1];
    var LinkComponent = props.LinkComponent, className = props.className, disabledBreadcrumbEditButton = props.disabledBreadcrumbEditButton, errorText = props.errorText, handleAnalyticsEvent = props.handleAnalyticsEvent, isBreadcrumb = props.isBreadcrumb, labelLink = props.labelLink, onCancel = props.onCancel, onEdit = props.onEdit, propText = props.text, textSuffix = props.textSuffix, rest = __rest(props, ["LinkComponent", "className", "disabledBreadcrumbEditButton", "errorText", "handleAnalyticsEvent", "isBreadcrumb", "labelLink", "onCancel", "onEdit", "text", "textSuffix"]);
    react_1.default.useEffect(function () {
        setText(propText);
    }, [propText]);
    react_1.default.useEffect(function () {
        onCancel();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEditing]);
    var onChange = function (e) {
        setText(e.target.value);
    };
    var openEdit = function () {
        // Send analytics when pencil icon is clicked.
        if (handleAnalyticsEvent) {
            handleAnalyticsEvent();
        }
        setIsEditing(true);
    };
    var finishEditing = function () {
        /**
         * if the entered text is different from the original text
         * provided, run the update callback
         *
         * only exit editing mode if promise resolved
         */
        if (text !== propText) {
            onEdit(text)
                .then(function () {
                setIsEditing(false);
            })
                .catch(function (e) { return e; });
        }
        else {
            /** otherwise, we've just submitted the form with no value change */
            setIsEditing(false);
        }
    };
    var cancelEditing = function () {
        setIsEditing(false);
        setText(props.text);
    };
    /** confirm or cancel edits if the enter or escape keys are pressed, respectively */
    var handleKeyPress = function (e) {
        if (e.key === 'Enter') {
            finishEditing();
        }
        if (e.key === 'Escape' || e.key === 'Esc') {
            cancelEditing();
        }
    };
    var labelText = (<H1Header_1.H1Header className={cx(classes.root, (_a = {}, _a[classes.breadcrumbText] = isBreadcrumb, _a))} data-qa-editable-text title={"".concat(text).concat(textSuffix !== null && textSuffix !== void 0 ? textSuffix : '')}/>);
    return !isEditing && !errorText ? (<div className={cx(classes.container, classes.initial, className)} data-testid={'editable-text'}>
      {labelLink ? (<LinkComponent className={classes.underlineOnHover} to={labelLink}>
          {labelText}
        </LinkComponent>) : (labelText)}
      {/** pencil icon */}
      <Button_1.Button aria-label={"Edit ".concat(text)} className={cx(classes.button, classes.editIcon)} data-qa-edit-button disabled={disabledBreadcrumbEditButton} onClick={openEdit}>
        <Edit_1.default className={classes.icon}/>
      </Button_1.Button>
    </div>) : (<ClickAwayListener_1.ClickAwayListener mouseEvent="onMouseDown" onClickAway={cancelEditing}>
      <div className={cx(classes.container, className)} data-qa-edit-field>
        <TextField_1.TextField {...rest} 
    // eslint-disable-next-line
    autoFocus={true} className={classes.textField} editable errorText={props.errorText} hideLabel inputProps={{
            className: cx(classes.input, (_b = {},
                _b[classes.breadcrumbText] = isBreadcrumb,
                _b)),
        }} InputProps={{ className: classes.inputRoot }} label={"Edit ".concat(text, " Label")} onChange={onChange} onKeyDown={handleKeyPress} type="text" value={text}/>
        <Button_1.Button aria-label="Save" className={classes.button} data-qa-save-edit onClick={finishEditing}>
          <Check_1.default className={classes.icon}/>
        </Button_1.Button>
        <Button_1.Button aria-label="Cancel" className={classes.button} data-qa-cancel-edit onClick={cancelEditing}>
          <ui_1.CloseIcon className={classes.icon} data-testid="CloseIcon"/>
        </Button_1.Button>
      </div>
    </ClickAwayListener_1.ClickAwayListener>);
};
exports.EditableText = EditableText;
