"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTitle = void 0;
var ui_1 = require("@linode/ui");
var ui_2 = require("@linode/ui");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var React = require("react");
var DialogTitle = function (props) {
    var ref = React.useRef(null);
    var className = props.className, id = props.id, isFetching = props.isFetching, onClose = props.onClose, subtitle = props.subtitle, sx = props.sx, title = props.title, titleSuffix = props.titleSuffix;
    React.useEffect(function () {
        if (ref.current === null) {
            return;
        }
        ref.current.focus();
    }, []);
    return (<DialogTitle_1.default className={className} data-qa-dialog-title={title} id={id} ref={ref} sx={sx} title={title}>
      <ui_2.Box data-qa-dialog-title={title} data-qa-drawer-title={title} sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            lineHeight: '1.5rem',
            position: 'relative',
            width: '100%',
        }}>
        <ui_2.Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
          {!isFetching && title}
          {titleSuffix}
        </ui_2.Box>
        {onClose !== null && (<ui_2.IconButton aria-label="Close" color="primary" data-qa-close-drawer onClick={onClose} size="large" sx={{
                right: '-12px',
            }}>
            <ui_1.CloseIcon data-testid="CloseIcon"/>
          </ui_2.IconButton>)}
      </ui_2.Box>
      {subtitle && <ui_1.Typography>{subtitle}</ui_1.Typography>}
    </DialogTitle_1.default>);
};
exports.DialogTitle = DialogTitle;
