
"use client"
import { CookieManager } from '@/utils/cookies';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const useLogout = () => {
    const router = useRouter(); 

    useEffect(() => {
        CookieManager.delete('token');
        router.push('/login');
    }, []);
    return null
};

export default useLogout;
