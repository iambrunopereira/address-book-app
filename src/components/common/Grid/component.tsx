import styles from './component.module.scss';

type GridProps = {
    children: React.ReactNode;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: string;
    style?: React.CSSProperties;
};

const Grid = ({ 
    children, 
    flexDirection = 'row', 
    justifyContent = 'flex-start', 
    alignItems = 'stretch',
    flexWrap = 'nowrap',
    gap, 
    style 
}: GridProps) => {
    const combinedStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        gap,
        ...style,
    };

    return (
        <div className={styles.Grid} style={combinedStyle}>
            {children}
        </div>
    );
};

export default Grid;