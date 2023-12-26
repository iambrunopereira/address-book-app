'use client';
import useLogout from '@/hooks/use-logout';
import { resetStore, useDispatch } from '@/store/store';

const LogoutHandler = () => {
    const dispatch = useDispatch();
    dispatch(resetStore());
    useLogout();

    return null
};

export default LogoutHandler;
