import styles from './component.module.scss';

type TypographyProps = {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'caption';
    className?: string;
    style?: React.CSSProperties;
};

const variantToTagMap: { [key: string]: keyof JSX.IntrinsicElements } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body1: 'p',
    body2: 'p',
    caption: 'span'
};

const Typography = ({ children, variant = 'body1', className = '', style }: TypographyProps) => {
    const Component = variantToTagMap[variant];
    return <Component className={`${styles[variant]} ${className}`} style={style}>{children}</Component>;
};

export default Typography;