import styles from './component.module.scss';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'link' | 'clear' | 'menu';
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset" | undefined;
    disabled?: boolean
};

const Button = ({ children, onClick, variant = 'primary', ...props }: ButtonProps) => {
    const buttonStyle = styles[variant] || styles.primary;

    return (
        <button className={`${styles.button} ${buttonStyle}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
