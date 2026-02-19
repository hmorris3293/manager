"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presets = void 0;
var luxon_1 = require("luxon");
var React = require("react");
var StyledActionButton_1 = require("../../Button/StyledActionButton");
var Stack_1 = require("../../Stack");
var Typography_1 = require("../../Typography/Typography");
var Presets = function (_a) {
    var onPresetSelect = _a.onPresetSelect, selectedPreset = _a.selectedPreset;
    var today = luxon_1.DateTime.now();
    var presets = [
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ hours: 1 }),
            }); },
            label: 'Last hour',
        },
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ days: 1 }),
            }); },
            label: 'Last day',
        },
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ days: 6 }),
            }); },
            label: 'Last 7 days',
        },
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ days: 30 }),
            }); },
            label: 'Last 30 days',
        },
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ days: 60 }),
            }); },
            label: 'Last 60 days',
        },
        {
            getRange: function () { return ({
                endDate: today,
                startDate: today.minus({ days: 90 }),
            }); },
            label: 'Last 90 days',
        },
        {
            getRange: function () { return ({ endDate: null, startDate: null }); },
            label: 'Reset',
        },
    ];
    return (<Stack_1.Stack paddingLeft={1} paddingRight={1 / 4} paddingTop={3} sx={function (theme) { return ({
            backgroundColor: theme.tokens.component.Calendar.PresetArea.Background,
            borderRight: "1px solid ".concat(theme.tokens.component.Calendar.Border),
            width: '134px',
        }); }}>
      <Typography_1.Typography sx={function (theme) { return ({
            marginBottom: theme.spacing(1),
            paddingLeft: theme.spacing(1),
        }); }}>
        Presets
      </Typography_1.Typography>
      {presets.map(function (preset) {
            var isSelected = selectedPreset === preset.label;
            var _a = preset.getRange(), endDate = _a.endDate, startDate = _a.startDate;
            return (<StyledActionButton_1.StyledActionButton key={preset.label} onClick={function () {
                    onPresetSelect(startDate, endDate, preset.label);
                }} sx={function (theme) { return ({
                    '&:active, &:focus': {
                        backgroundColor: theme.tokens.component.Calendar.PresetArea.ActivePeriod
                            .Background,
                        color: theme.tokens.component.Calendar.PresetArea.ActivePeriod.Text,
                    },
                    '&:hover': {
                        backgroundColor: !isSelected
                            ? theme.tokens.component.Calendar.PresetArea.HoverPeriod
                                .Background
                            : '',
                        color: isSelected
                            ? theme.tokens.component.Calendar.PresetArea.ActivePeriod.Text
                            : theme.tokens.component.Calendar.DateRange.Text,
                    },
                    backgroundColor: isSelected
                        ? theme.tokens.component.Calendar.PresetArea.ActivePeriod
                            .Background
                        : theme.tokens.component.Calendar.PresetArea.Background,
                    color: isSelected
                        ? theme.tokens.component.Calendar.PresetArea.ActivePeriod.Text
                        : theme.tokens.component.Calendar.DateRange.Text,
                    justifyContent: 'flex-start',
                    padding: theme.spacing(),
                }); }} variant="text">
            {preset.label}
          </StyledActionButton_1.StyledActionButton>);
        })}
    </Stack_1.Stack>);
};
exports.Presets = Presets;
