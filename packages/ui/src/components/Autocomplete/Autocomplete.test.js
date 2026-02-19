"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_2 = require("react");
var vitest_1 = require("vitest");
var testHelpers_1 = require("../../utilities/testHelpers");
var Autocomplete_1 = require("./Autocomplete");
// Mock the options for testing
var options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
];
// Mock the selection change callback function for testing
var handleSelectionChange = vitest_1.vi.fn();
(0, vitest_1.describe)('Autocomplete Component', function () {
    (0, vitest_1.it)('renders with the correct label', function () {
        (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete label="Test Label" onChange={handleSelectionChange} options={options}/>);
        var labelElement = react_1.screen.getByLabelText('Test Label');
        (0, vitest_1.expect)(labelElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('calls the onSelectionChange callback when an option is selected', function () {
        (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete label="Test Label" onChange={handleSelectionChange} options={options}/>);
        var inputElement = react_1.screen.getByRole('combobox');
        react_1.fireEvent.focus(inputElement);
        react_1.fireEvent.change(inputElement, { target: { value: 'Option 1' } });
        var optionElement = react_1.screen.getByText('Option 1');
        react_1.fireEvent.click(optionElement);
        var selectOption = handleSelectionChange.mock.calls[0][1];
        (0, vitest_1.expect)(selectOption).toEqual(options[0]);
    });
    (0, vitest_1.it)('displays the error message when errorText prop is provided', function () {
        var errorMessage = 'This field is required';
        (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete errorText={errorMessage} label="Test Label" onChange={handleSelectionChange} options={options}/>);
        var errorElement = react_1.screen.getByText(errorMessage);
        (0, vitest_1.expect)(errorElement).toBeInTheDocument();
    });
    (0, vitest_1.it)('does not display the error message when errorText prop is not provided', function () {
        (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete label="Test Label" onChange={handleSelectionChange} options={options}/>);
        var errorElement = react_1.screen.queryByText('This field is required');
        (0, vitest_1.expect)(errorElement).not.toBeInTheDocument();
    });
    (0, vitest_1.describe)('renders all no options messages', function () {
        (0, vitest_1.it)('displays the loading message when loading prop is true', function () {
            (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete label="Test Label" loading onChange={handleSelectionChange} options={[]}/>);
            var inputElement = react_1.screen.getByRole('combobox');
            react_1.fireEvent.focus(inputElement);
            react_1.fireEvent.keyDown(inputElement, { key: 'ArrowDown' });
            var loadingMessage = react_1.screen.getByText('Loading...');
            (0, vitest_1.expect)(loadingMessage).toBeInTheDocument();
        });
        (0, vitest_1.it)('displays the no options message when options are empty', function () {
            (0, testHelpers_1.renderWithTheme)(<Autocomplete_1.Autocomplete label="Test Label" onChange={handleSelectionChange} options={[]}/>);
            var inputElement = react_1.screen.getByRole('combobox');
            react_1.fireEvent.focus(inputElement);
            react_1.fireEvent.keyDown(inputElement, { key: 'ArrowDown' });
            var noOptionsMessage = react_1.screen.getByText('You have no options to choose from');
            (0, vitest_1.expect)(noOptionsMessage).toBeInTheDocument();
        });
    });
});
