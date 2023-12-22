import { render } from '@testing-library/react';
import { CircularLoader } from '.';

describe('CircularLoader Component', () => {
    it('renders correctly', () => {
        const { container } = render(<CircularLoader />);
        expect(container.firstChild).toHaveClass('circularLoader');
    });
});
