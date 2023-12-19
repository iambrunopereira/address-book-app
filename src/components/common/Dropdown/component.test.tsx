import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '.';

describe('Dropdown Component', () => {
    it('renders trigger element correctly', () => {
        render(
            <Dropdown triggerElement={<button>Open Dropdown</button>}>
                <p>Dropdown Content</p>
            </Dropdown>
        );
        expect(screen.getByText('Open Dropdown')).toBeInTheDocument();
    });

    it('does not show content initially', () => {
        render(
            <Dropdown triggerElement={<button>Open Dropdown</button>}>
                <p>Dropdown Content</p>
            </Dropdown>
        );
        expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
    });

    it('shows content when trigger is clicked', () => {
        render(
            <Dropdown triggerElement={<button>Open Dropdown</button>}>
                <p>Dropdown Content</p>
            </Dropdown>
        );
        fireEvent.click(screen.getByText('Open Dropdown'));
        expect(screen.getByText('Dropdown Content')).toBeInTheDocument();
    });

    it('closes when clicking outside', () => {
        // Attach a div outside the dropdown to act as an outside element
        render(
            <>
                <div data-testid="outside">Outside Element</div>
                <Dropdown triggerElement={<button>Open Dropdown</button>}>
                    <p>Dropdown Content</p>
                </Dropdown>
            </>
        );
        // Open the dropdown
        fireEvent.click(screen.getByText('Open Dropdown'));
        // Click outside the dropdown
        fireEvent.mouseDown(screen.getByTestId('outside'));
        // Expect the dropdown to close
        expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
    });

    // You can add more tests to check for keyboard interactions, accessibility, etc.
});
