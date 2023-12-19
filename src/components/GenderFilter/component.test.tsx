import { fireEvent, render, screen } from '@testing-library/react';
import NationalitiesSelector from '.';

describe('NationalitiesSelector Component', () => {
    it('renders correctly', () => {
        render(<NationalitiesSelector />);
        expect(screen.getByText('Select Nationalities')).toBeInTheDocument();
    });

    it('displays multiple options', () => {
        render(<NationalitiesSelector />);
        const options = screen.getAllByRole('option'); // Adjust this if your component uses different roles or tags
        expect(options.length).toBeGreaterThan(1);
    });

    it('allows multiple selections', () => {
        render(<NationalitiesSelector />);
        const optionOne = screen.getByText('United States');
        const optionTwo = screen.getByText('United Kingdom');

        fireEvent.click(optionOne);
        fireEvent.click(optionTwo);

        expect(optionOne).toHaveAttribute('aria-selected', 'true');
        expect(optionTwo).toHaveAttribute('aria-selected', 'true');
    });

    // Additional tests for checking if onChange handler is called can be added here
});
