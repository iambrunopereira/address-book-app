'use client';

import Box from '@/components/common/Box';
import { Button } from '@/components/common/Button';
import { config } from '@/configs';
import { useFetchUserFavoritesQuery } from '@/store/services/usersApi';
import { addFavoritesList } from '@/store/slices/favoritesSlice';
import { menuToggle } from '@/store/slices/settingsSlice';
import { useDispatch, useSelector } from '@/store/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { RiMenuFill, RiMenuFoldLine } from 'react-icons/ri';
import styles from './container.module.scss';

interface Props {
    children: React.ReactNode;
}

const Frame: FC<Props> = ({ children }) => {
   
    const { menuOpened } = useSelector(state => state.settings);
    const dispatch = useDispatch();
    const router = useRouter();
    const { data } = useFetchUserFavoritesQuery({});
   
    useEffect(() => {
        if (data) {
            dispatch(addFavoritesList(data?.data));
        }
  
    }, [data]);
    return (
        <div className={styles.appContainer}>
            <nav className={styles.nav}>
                <section className={styles.logoSection}>
                    <Image src="/assets/logo.svg" width="25" height="25" alt="logo" />
                    
                    <Button variant="link" onClick={() => router.push('/')}>
                        {config.appName}
                    </Button>
                    <Button variant="clear" onClick={() => dispatch(menuToggle())}>
                        {menuOpened ? <RiMenuFoldLine /> : <RiMenuFill />}
                    </Button>
                </section>
                <section  className={styles.actionsSection}>
                    <Button variant="clear" onClick={() => router.push('/logout')}>
                        <IoLogOutOutline />
                    </Button>
                </section>
            </nav>
            <div className={styles.contentContainer}>
                <aside className={`${styles.sidebar} ${!menuOpened ? styles.close : ''}`}>
                <Box
                        onClick={() => router.push('/')}
                        sx={{
                            display: 'flex',
                            p: '4px',
                            textDecoration: 'none',
                        }}
                    >
                        Home
                    </Box>
                    <Box
                        onClick={() => router.push('/favorites')}
                        sx={{
                            display: 'flex',
                            p: '4px',
                            textDecoration: 'none',
                        }}
                    >
                        Favorites
                    </Box>
                <Box
                        onClick={() => router.push('/settings')}
                        sx={{
                            display: 'flex',
                            p: '4px',
                            textDecoration: 'none',
                        }}
                    >
                        Settings
                    </Box>
                </aside>
                <main className={`${styles.main} ${menuOpened ? styles.menuIsOpen : ''}`}>{children}</main>
            </div>
        </div>
    );
};

export default Frame;
