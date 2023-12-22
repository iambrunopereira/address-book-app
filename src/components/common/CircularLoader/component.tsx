import styles from './component.module.scss';

type CircularLoaderProps = {
    size?: number; 
    style?: React.CSSProperties;
};

const CircularLoader = ({ size = 40, style }: CircularLoaderProps) => (
    <div className={styles.circularLoader} style={{ width: size, height: size, ...style }}></div>
);

export default CircularLoader;
