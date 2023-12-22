import { useCallback, useRef } from 'react';
import Box from '../Box';
import { DotsLoader } from '../DotsLoader';

type InfiniteScrollProps = {
    hasMore: boolean;
    isLoading: boolean;
    loadMore: () => void;
    children: React.ReactNode;
};

const InfiniteScroll = ({ hasMore, isLoading, loadMore, children }: InfiniteScrollProps) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useCallback(
        (node: HTMLElement | null) => {
            if (isLoading) return; 
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    loadMore();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore, loadMore]
    );

    return (
        <Box style={{maxWidth: '1250px'}}>
            {children}
            <div ref={lastElementRef} />
            {isLoading && <Box><DotsLoader /></Box>}
        </Box>
    );
};

export default InfiniteScroll;