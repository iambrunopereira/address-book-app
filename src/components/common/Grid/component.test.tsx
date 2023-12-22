import { render, screen } from '@testing-library/react';
import Grid from './component';

describe('Grid Component', () => {
    it('renders children correctly', () => {
        render(
            <Grid>
                <div>Child 1</div>
                <div>Child 2</div>
            </Grid>
        );
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('applies flex container styles', () => {
        const { container } = render(
            <Grid flexDirection="row" justifyContent="space-between" alignItems="center">
                <div>Content</div>
            </Grid>
        );
        expect(container.firstChild).toHaveStyle('display: flex');
        expect(container.firstChild).toHaveStyle('flex-direction: row');
        expect(container.firstChild).toHaveStyle('justify-content: space-between');
        expect(container.firstChild).toHaveStyle('align-items: center');
    });

  
});
