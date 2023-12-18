import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Modal Component', () => {
    it('renders when open', () => {
        render(
            <Modal isOpen={true} onClose={() => {}}>
                <p>Modal Content</p>
            </Modal>
        );
        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('does not render when not open', () => {
        render(
            <Modal isOpen={false} onClose={() => {}}>
                <p>Modal Content</p>
            </Modal>
        );
        expect(screen.queryByText('Modal Content')).toBeNull();
    });
});
