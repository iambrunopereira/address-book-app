"use client"
import { useCustomHook } from '@/hooks/use-random-color';
import styles from './component.module.scss';

const DotsLoader = () => {
    const color = useCustomHook();

    return (
        <div className={styles.dotsLoader}>
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
        </div>
    );
};

export default DotsLoader;