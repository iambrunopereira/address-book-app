"use client";

import Box from '@/components/common/Box';
import { LinearLoader } from '@/components/common/LinearLoader';
import { config } from '@/configs';
import type { FC } from 'react';
import styles from "./component.module.scss";

export const SplashScreen: FC = () => (
    <Box elementType="main" className={styles.splashScreen}>
        <p>{config.appName}</p>
         <LinearLoader />
    </Box>
);
