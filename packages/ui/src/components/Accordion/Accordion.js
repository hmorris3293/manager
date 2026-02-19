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
exports.Accordion = void 0;
var Accordion_1 = require("@mui/material/Accordion");
var AccordionDetails_1 = require("@mui/material/AccordionDetails");
var AccordionSummary_1 = require("@mui/material/AccordionSummary");
var Grid_1 = require("@mui/material/Grid");
var React = require("react");
var mui_1 = require("tss-react/mui");
var assets_1 = require("../../assets");
var Box_1 = require("../Box");
var Notice_1 = require("../Notice");
var Typography_1 = require("../Typography");
var useStyles = (0, mui_1.makeStyles)()(function (theme) { return ({
    itemCount: {
        alignItems: 'center',
        backgroundColor: theme.tokens.color.Ultramarine[70],
        borderRadius: '50%',
        color: theme.tokens.color.Neutrals.White,
        display: 'flex',
        font: theme.font.bold,
        fontSize: '0.875rem',
        height: 30,
        justifyContent: 'center',
        lineHeight: 0,
        position: 'absolute',
        right: 50,
        top: 8,
        width: 30,
    },
}); });
/**
 * Accordions are better suited for when people need to focus on content that is key for decision making and other supplementary content can be hidden. Accordions should be avoided when users need most if not all of the content on a page. Scrolling isn't as big of an issue as once thought.
 *
 * ### Pros
 * - Puts focus on the content the user is interested in
 * - Can make pages seem less complex
 *
 * ### Cons
 * - Can be cumbersome which adds to cognitive load
 *   - “People treat clicks like currency and they don't spend it frivolously” - NNG [Citation](https://www.nngroup.com/articles/clickable-elements/)
 * - Increases interaction cost
 * - Accordions collapsed by default diminishes people's awareness of content
 */
var Accordion = function (props) {
    var classes = useStyles().classes;
    var actions = props.actions, defaultExpanded = props.defaultExpanded, detailProps = props.detailProps, error = props.error, expandIconClassNames = props.expandIconClassNames, heading = props.heading, headingChip = props.headingChip, headingNumberCount = props.headingNumberCount, headingProps = props.headingProps, success = props.success, subHeading = props.subHeading, summaryProps = props.summaryProps, warning = props.warning, accordionProps = __rest(props, ["actions", "defaultExpanded", "detailProps", "error", "expandIconClassNames", "heading", "headingChip", "headingNumberCount", "headingProps", "success", "subHeading", "summaryProps", "warning"]);
    var _a = React.useState(defaultExpanded), open = _a[0], setOpen = _a[1];
    var handleClick = function () {
        setOpen(!open);
    };
    var notice = success || warning || error || null;
    return (<Accordion_1.default defaultExpanded={defaultExpanded} {...accordionProps} data-qa-panel={heading}>
      <AccordionSummary_1.default expandIcon={<assets_1.ChevronDownIcon className={"caret ".concat(expandIconClassNames)}/>} onClick={handleClick} {...summaryProps} data-qa-panel-summary={heading}>
        <Box_1.Box display="flex" flexDirection="column" rowGap={function (theme) { return theme.spacingFunction(8); }}>
          <Typography_1.Typography {...headingProps} data-qa-panel-subheading variant="h3">
            {heading}
            {headingChip}
          </Typography_1.Typography>
          {subHeading && (<Typography_1.Typography color="textSecondary" variant="body1">
              {subHeading}
            </Typography_1.Typography>)}
        </Box_1.Box>
        {headingNumberCount && headingNumberCount > 0 ? (<span className={classes.itemCount}>{headingNumberCount}</span>) : null}
      </AccordionSummary_1.default>
      <AccordionDetails_1.default {...detailProps} data-qa-panel-details>
        <Grid_1.default container>
          {notice ? (<Grid_1.default size={12}>
              <Notice_1.Notice data-qa-notice text={notice} {...(success && { variant: 'success' })} {...(warning && { variant: 'warning' })} {...(error && { variant: 'error' })} spacingBottom={8}/>
            </Grid_1.default>) : null}
          <Grid_1.default data-qa-grid-item size={12}>
            {props.children}
          </Grid_1.default>
        </Grid_1.default>
      </AccordionDetails_1.default>
      {actions ? actions(accordionProps) : null}
    </Accordion_1.default>);
};
exports.Accordion = Accordion;
