"use client";

import Box from '@/components/common/Box';
import { LinearLoader } from '@/components/common/LinearLoader';
import { Typography } from '@/components/common/Typography';
import { config } from '@/configs';
import Image from 'next/image';
import type { FC } from 'react';
import styles from "./component.module.scss";
export const SplashScreen: FC = () => (
    <Box elementType="main" className={styles.splashScreen}>
        <Image src="/assets/logo.svg" width="100" height="100" alt="logo" />
        <Typography variant='h2'>{config.appName}</Typography>
         <LinearLoader />
    </Box>
);
