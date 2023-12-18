import styles from './component.module.scss';

type TextFieldProps = {
    label?: string;
    placeholder?: string;
    value: string;
    name?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
};

const TextField = ({ label, placeholder, name, value, onChange, error, type = 'text' }: TextFieldProps) => (
    <div className={styles.textField}>
        {label && <label>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className={error ? styles.error : ''}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
);

export default TextField;
