import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
    it('renders the button component', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('applies the primary style', () => {
        render(<Button variant="primary">Primary</Button>);
        expect(screen.getByRole('button', { name: /primary/i })).toHaveClass('primary');
    });

    it('applies the secondary style', () => {
        render(<Button variant="secondary">Secondary</Button>);
        expect(screen.getByRole('button', { name: /secondary/i })).toHaveClass('secondary');
    });

    it('applies the danger style', () => {
        render(<Button variant="danger">Danger</Button>);
        expect(screen.getByRole('button', { name: /danger/i })).toHaveClass('danger');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button', { name: /click me/i }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders children correctly', () => {
        render(<Button>Child Text</Button>);
        expect(screen.getByRole('button', { name: /child text/i })).toHaveTextContent('Child Text');
    });

    it('passes additional props to the button', () => {
        render(<Button data-testid="custom-button">Custom Prop</Button>);
        expect(screen.getByTestId('custom-button')).toBeInTheDocument();
    });
});
