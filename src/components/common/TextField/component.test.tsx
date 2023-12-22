import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';

describe('<TextField />', () => {
  const mockOnChange = jest.fn();

  it('renders correctly', () => {
    render(<TextField label="Test Label" placeholder="Enter text" value="" onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('displays the label when provided', () => {
    render(<TextField label="Test Label" value="" onChange={mockOnChange} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('handles input value and onChange event', () => {
    render(<TextField value="Test" onChange={mockOnChange} />);
    const input = screen.getByDisplayValue('Test');
    fireEvent.change(input, { target: { value: 'Changed' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('displays an error message when error prop is provided', () => {
    render(<TextField error="Error message" value="" onChange={mockOnChange} />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  
});
