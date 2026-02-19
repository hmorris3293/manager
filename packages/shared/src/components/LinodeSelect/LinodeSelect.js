"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinodeSelect = void 0;
var queries_1 = require("@linode/queries");
var ui_1 = require("@linode/ui");
var utilities_1 = require("@linode/utilities");
var react_1 = require("react");
/**
 * A select input allowing selection between account Linodes.
 */
var LinodeSelect = function (props) {
    var _a, _b, _c;
    var checkIsOptionEqualToValue = props.checkIsOptionEqualToValue, _d = props.clearable, clearable = _d === void 0 ? true : _d, disabled = props.disabled, errorText = props.errorText, filter = props.filter, getOptionDisabled = props.getOptionDisabled, helperText = props.helperText, id = props.id, label = props.label, loading = props.loading, multiple = props.multiple, noMarginTop = props.noMarginTop, noOptionsMessage = props.noOptionsMessage, onBlur = props.onBlur, onSelectionChange = props.onSelectionChange, options = props.options, optionsFilter = props.optionsFilter, placeholder = props.placeholder, sx = props.sx, value = props.value;
    var _e = (0, queries_1.useAllLinodesQuery)({}, filter, !options), data = _e.data, error = _e.error, isFetching = _e.isFetching;
    var _f = react_1.default.useState(''), inputValue = _f[0], setInputValue = _f[1];
    var linodes = optionsFilter ? data === null || data === void 0 ? void 0 : data.filter(optionsFilter) : data;
    react_1.default.useEffect(function () {
        /** We want to clear the input value when the value prop changes to null.
         * This is for use cases where a user changes their region and the Linode
         * they had selected is no longer available.
         */
        if (value === null) {
            setInputValue('');
        }
    }, [value]);
    return (<ui_1.Autocomplete clearOnBlur={false} data-testid="add-linode-autocomplete" disableClearable={!clearable} disableCloseOnSelect={multiple} disabled={disabled} disablePortal={true} errorText={(_a = error === null || error === void 0 ? void 0 : error[0].reason) !== null && _a !== void 0 ? _a : errorText} getOptionDisabled={getOptionDisabled} helperText={helperText} id={id} inputValue={inputValue} isOptionEqualToValue={checkIsOptionEqualToValue
            ? function (option, value) { return option.id === value.id; }
            : undefined} label={label ? label : multiple ? 'Linodes' : 'Linode'} loading={isFetching || loading} multiple={multiple} noMarginTop={noMarginTop} noOptionsText={noOptionsMessage !== null && noOptionsMessage !== void 0 ? noOptionsMessage : getDefaultNoOptionsMessage(error, isFetching)} onBlur={onBlur} onChange={function (_, value) {
            return multiple && Array.isArray(value)
                ? onSelectionChange(value)
                : !multiple && !Array.isArray(value) && onSelectionChange(value);
        }} onInputChange={function (_, value) { return setInputValue(value); }} options={options || (linodes !== null && linodes !== void 0 ? linodes : [])} placeholder={placeholder
            ? placeholder
            : multiple
                ? 'Select Linodes'
                : 'Select a Linode'} PopperComponent={ui_1.CustomPopper} slotProps={{ chip: { deleteIcon: <ui_1.CloseIcon /> } }} sx={sx} value={typeof value === 'function'
            ? multiple && Array.isArray(value)
                ? ((_b = linodes === null || linodes === void 0 ? void 0 : linodes.filter(value)) !== null && _b !== void 0 ? _b : null)
                : ((_c = linodes === null || linodes === void 0 ? void 0 : linodes.find(value)) !== null && _c !== void 0 ? _c : null)
            : (0, utilities_1.mapIdsToDevices)(value, linodes)}/>);
};
exports.LinodeSelect = LinodeSelect;
var getDefaultNoOptionsMessage = function (error, loading) {
    if (error) {
        return 'An error occurred while fetching your Linodes';
    }
    else if (loading) {
        return 'Loading your Linodes...';
    }
    else {
        return 'No available Linodes';
    }
};
