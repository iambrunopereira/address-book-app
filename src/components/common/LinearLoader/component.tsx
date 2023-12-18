"use client";
import { useCustomHook } from '@/hooks/use-random-color';
import styles from './component.module.scss';

const LinearLoader = () => {
    const color = useCustomHook();

    return (
        <div className={styles.linearLoader} style={{ backgroundColor: color }}></div>
    );
};

export default LinearLoader;