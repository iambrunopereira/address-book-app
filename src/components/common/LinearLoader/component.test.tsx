import { render } from '@testing-library/react';
import { LinearLoader } from '.';

describe('LinearLoader Component', () => {
    it('renders correctly', () => {
        const { container } = render(<LinearLoader />);
        expect(container.firstChild).toHaveClass('linearLoader');
    });
});
