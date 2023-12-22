import { render } from '@testing-library/react';
import { DotsLoader } from '.';


describe('DotsLoader Component', () => {
    it('renders correctly', () => {
        const { container } = render(<DotsLoader />);
        expect(container.firstChild).toHaveClass('dotsLoader');
    });
});
