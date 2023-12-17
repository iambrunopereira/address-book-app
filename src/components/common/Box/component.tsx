import styles from './component.module.scss';

// Define a type for the Box props
type BoxProps = {
    children: React.ReactNode;
    m?: string;
    p?: string;
    flex?: boolean;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'center' | 'start' | 'end' | 'stretch' | 'baseline';
    style?: React.CSSProperties;
    [x: string]: any; // for additional props
};

const Box = ({
    children,
    m,
    p,
    flex,
    flexDirection,
    justifyContent,
    alignItems,
    style,
    ...props
}: BoxProps) => {
    const combinedStyle: React.CSSProperties = {
        margin: m,
        padding: p,
        display: flex ? 'flex' : '',
        flexDirection,
        justifyContent,
        alignItems,
        ...style,
    };

    return (
        <div className={styles.box} style={combinedStyle} {...props}>
            {children}
        </div>
    );
};

export default Box;
