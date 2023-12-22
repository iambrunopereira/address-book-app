import { render, screen } from '@testing-library/react';
import GridItem from './component';

describe('GridItem Component', () => {
    it('renders children correctly', () => {
        render(
            <GridItem>
                <div>Item Content</div>
            </GridItem>
        );
        expect(screen.getByText('Item Content')).toBeInTheDocument();
    });

    it('applies flex item styles', () => {
        const { container } = render(
            <GridItem flexGrow={1} flexShrink={0} flexBasis="50%">
                <div>Content</div>
            </GridItem>
        );
        expect(container.firstChild).toHaveStyle('flex-grow: 1');
        expect(container.firstChild).toHaveStyle('flex-shrink: 0');
        expect(container.firstChild).toHaveStyle('flex-basis: 50%');
    });

});
