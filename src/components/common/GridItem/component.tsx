import styles from './component.module.scss';

type GridItemProps = {
    children: React.ReactNode;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string;
    style?: React.CSSProperties;
};

const GridItem = ({ 
    children, 
    flexGrow = 0, 
    flexShrink = 1, 
    flexBasis = 'auto', 
    style 
}: GridItemProps) => {
    const combinedStyle: React.CSSProperties = {
        flexGrow,
        flexShrink,
        flexBasis,
        ...style,
    };

    return (
        <div className={styles.GridItem} style={combinedStyle}>
            {children}
        </div>
    );
};

export default GridItem;
