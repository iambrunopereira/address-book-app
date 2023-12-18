import { render, screen } from '@testing-library/react';
import Typography from '.';

describe('Typography Component', () => {
    it('renders h1 variant correctly', () => {
        render(<Typography variant="h1">Heading 1</Typography>);
        const headingElement = screen.getByText('Heading 1');
        expect(headingElement.tagName).toBe('H1');
    });

    it('renders body1 variant correctly', () => {
        render(<Typography variant="body1">Body Text</Typography>);
        const bodyElement = screen.getByText('Body Text');
        expect(bodyElement.tagName).toBe('P');
    });

    it('renders caption variant correctly', () => {
        render(<Typography variant="caption">Caption Text</Typography>);
        const captionElement = screen.getByText('Caption Text');
        expect(captionElement.tagName).toBe('SPAN');
    });

    it('renders with default variant when none is provided', () => {
        render(<Typography>Default Text</Typography>);
        const defaultElement = screen.getByText('Default Text');
        expect(defaultElement.tagName).toBe('P'); // Default is 'body1' which uses 'p' tag
    });

    // Additional tests for className and other props can be added here
});
