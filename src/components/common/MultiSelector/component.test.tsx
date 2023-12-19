import { render, screen, fireEvent } from '@testing-library/react';
import MultiSelector from './MultiSelector';

describe('MultiSelector Component', () => {
    const options = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        // Add more options as needed
    ];

    it('displays selected values', () => {
        render(<MultiSelector options={options} selectedValues={['us']} onChange={() => {}} />);
        expect(screen.getByText('United States')).toBeInTheDocument();
    });

    it('shows options on click', () => {
        render(<MultiSelector options={options} selectedValues={[]} onChange={() => {}} />);
        fireEvent.click(screen.getByText(''));
        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    // Additional tests for selecting/deselecting options
});
