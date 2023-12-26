'use client';
import { useFetchUserFavoritesQuery } from '@/store/services/usersApi';
import { addFavoritesList } from '@/store/slices/favoritesSlice';
import { useDispatch, useSelector } from '@/store/store';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavBar } from '../NavBar/component';
import styles from './container.module.scss';
import { Sidebar } from '../Sidebar';
interface Props {
    children: React.ReactNode;
}

const Frame: FC<Props> = ({ children }) => {
    const { menuOpened } = useSelector(state => state.settings);
    const dispatch = useDispatch();
    const { data } = useFetchUserFavoritesQuery({});
    useEffect(() => {
        if (data) {
            dispatch(addFavoritesList(data?.data));
        }
    }, [data]);
    return (
        <div className={styles.appContainer}>
            <NavBar menuOpened={menuOpened}/>
            <Sidebar menuOpened={menuOpened}>
                {children}
            </Sidebar>
        </div>
    );
};

export default Frame;
