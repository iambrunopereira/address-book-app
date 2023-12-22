'use client';

import { config } from '@/configs';
import type { FC } from 'react';
import styles from './component.module.scss';

import Button from '@/components/common/Button';
import { Dropdown } from '@/components/common/Dropdown';
import i18n from '@/i18n';
import { menuToggle } from '@/store/slices/settingsSlice';
import { useDispatch } from '@/store/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { GrLanguage } from 'react-icons/gr';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiMenuFill, RiMenuFoldLine } from 'react-icons/ri';

interface Props {
    menuOpened: boolean;
}

export const NavBar: FC<Props> = ({ menuOpened }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { t } = useTranslation();
    const handleSwitchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <nav className={styles.nav}>
            <section className={styles.logoSection}>
                <Image src="/assets/logo.svg" width="25" height="25" alt="logo" />

                <Button variant="clear" onClick={() => router.push('/')}>
                    {config.appName}
                </Button>
                <Button variant="clear" onClick={() => dispatch(menuToggle())}>
                    {menuOpened ? <RiMenuFoldLine /> : <RiMenuFill />}
                </Button>
            </section>
            <section className={styles.actionsSection}>
                <Dropdown
                    triggerElement={
                        <Button variant="clear">
                            <GrLanguage />
                        </Button>
                    }
                >
                    <Button variant="clear" onClick={() => handleSwitchLanguage('pt')} style={{ width: '100%' }}>
                        {t(`languages__options__portuguese`)}
                    </Button>
                    <Button variant="clear" onClick={() => handleSwitchLanguage('en')} style={{ width: '100%' }}>
                        {t(`languages__options__english`)}
                    </Button>
                </Dropdown>
                <Button variant="clear" onClick={() => router.push('/logout')}>
                    <IoLogOutOutline />
                </Button>
            </section>
        </nav>
    );
};
