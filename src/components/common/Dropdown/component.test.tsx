import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '.';


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
        render(
            <>
                <div data-testid="outside">Outside Element</div>
                <Dropdown triggerElement={<button>Open Dropdown</button>}>
                    <p>Dropdown Content</p>
                </Dropdown>
            </>
        );
        fireEvent.click(screen.getByText('Open Dropdown'));
        fireEvent.mouseDown(screen.getByTestId('outside'));
        expect(screen.queryByText('Dropdown Content')).not.toBeInTheDocument();
    });

});
