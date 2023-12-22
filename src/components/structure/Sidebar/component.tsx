'use client';

import type { FC } from 'react';
import styles from './component.module.scss';

import Button from '@/components/common/Button';
import i18n from '@/i18n';
import { useDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

interface Props {
    menuOpened: boolean;
    children: React.ReactNode;
}

export const Sidebar: FC<Props> = ({ menuOpened, children }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { t } = useTranslation();
    const handleSwitchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={styles.contentContainer}>
            <aside className={`${styles.sidebar} ${!menuOpened ? styles.close : ''}`}>
                <Button variant='menu' onClick={() => router.push('/')} style={{marginBottom: '1rem'}}>{t(`menu__options__home`)}</Button>
                <Button variant='menu' onClick={() => router.push('/favorites')}>{t(`menu__options__favorites`)}</Button>
            </aside>
            <main className={`${styles.main} ${menuOpened ? styles.menuIsOpen : ''}`}>{children}</main>
        </div>
    );
};
