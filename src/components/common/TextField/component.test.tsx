import { render, screen, fireEvent } from '@testing-library/react';
import TextField from '.';

describe('TextField Component', () => {
    it('renders input element', () => {
        render(<TextField label="Name" value="" onChange={() => {}} />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
    });

    it('displays value', () => {
        render(<TextField value="John Doe" onChange={() => {}} />);
        expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
    });

    it('changes value on user input', () => {
        const handleChange = jest.fn();
        render(<TextField value="" onChange={handleChange} />);
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Jane Doe' } });
        expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'Jane Doe' } }));
    });

    it('displays error message', () => {
        const errorMessage = 'Error message';
        render(<TextField value="" onChange={() => {}} error={errorMessage} />);
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveClass('error');
    });
});
