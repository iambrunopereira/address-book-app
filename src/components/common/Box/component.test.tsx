import { render, screen } from '@testing-library/react';
import Box from '.';

describe('Box Component', () => {
    it('renders children correctly', () => {
        render(<Box>Content</Box>);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });

    it('applies margin and padding', () => {
        const { container } = render(<Box m="10px" p="20px">Content</Box>);
        expect(container.firstChild).toHaveStyle('margin: 10px');
        expect(container.firstChild).toHaveStyle('padding: 20px');
    });

    it('applies flexbox properties', () => {
        const { container } = render(
            <Box flex flexDirection="row" justifyContent="center" alignItems="center">
                Content
            </Box>
        );
        expect(container.firstChild).toHaveStyle('display: flex');
        expect(container.firstChild).toHaveStyle('flex-direction: row');
        expect(container.firstChild).toHaveStyle('justify-content: center');
        expect(container.firstChild).toHaveStyle('align-items: center');
    });

});
