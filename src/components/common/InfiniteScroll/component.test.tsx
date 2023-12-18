import { render, screen } from '@testing-library/react';
import InfiniteScroll from '.';

describe('InfiniteScroll Component', () => {
    it('renders children correctly', () => {
        render(
            <InfiniteScroll hasMore={true} isLoading={false} loadMore={() => {}}>
                <div>Child content</div>
            </InfiniteScroll>
        );
        expect(screen.getByText('Child content')).toBeInTheDocument();
    });

    // Additional tests for loading state and intersection observer can be added here
});
