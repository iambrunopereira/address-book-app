import { fireEvent, render, screen } from '@testing-library/react';
import MultiSelector from './component';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

test('renders MultiSelector component', () => {
  render(<MultiSelector dataTestId="multi-selector" options={options} selectedValues={[]} onChange={() => {}} />);
  const multiSelectorElement = screen.getByTestId('multi-selector');
  expect(multiSelectorElement).toBeInTheDocument();
});

test('displays selected values', () => {
  const selectedValues = ['option1', 'option2'];
  render(<MultiSelector dataTestId="multi-selector" options={options} selectedValues={selectedValues} onChange={() => {}} />);
  const selectedItemsElement = screen.getByTestId('multi-selector-selected-items');
  expect(selectedItemsElement).toHaveTextContent('option1, option2');
});

test('toggles options list', () => {
  render(<MultiSelector dataTestId="multi-selector" options={options} selectedValues={[]} onChange={() => {}} />);
  const selectedItemsElement = screen.getByTestId('multi-selector-selected-items');
  fireEvent.click(selectedItemsElement);
  const optionsListElement = screen.getByTestId('multi-selector-options-list');
  
  expect(optionsListElement).toBeInTheDocument();
});


test('calls onChange when an option is selected', () => {
    const handleChange = jest.fn();
    render(<MultiSelector dataTestId="multi-selector" options={options} selectedValues={[]} onChange={handleChange} />);
    const selectedItemsElement = screen.getByTestId('multi-selector-selected-items');
    fireEvent.click(selectedItemsElement);
    const optionsListElement = screen.getByTestId('multi-selector-options-list');
    fireEvent.click(optionsListElement); 
  
    const optionElement = screen.getByText('Option 1');
    fireEvent.click(optionElement); 
  
    expect(handleChange).toHaveBeenCalledWith(['option1']);