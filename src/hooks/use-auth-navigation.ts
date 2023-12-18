
"use client"
import { publicRoutes } from '@/configs';
import { CookieManager } from '@/utils/cookies';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
const isAuthenticated = () => {
    return Boolean(CookieManager.get('token'));
};

const useAuthNavigation = () => {
    const router = useRouter(); 
    const pathname = usePathname()
    const [processEnd, setProcessEnd] = useState(false);

    const isPrivatePage = !publicRoutes.includes(pathname);

    useEffect(() => {
        const hasSession = isAuthenticated();
        if (isPrivatePage && !hasSession) {
            router.push('/login');
        } else if (!isPrivatePage && hasSession) {
            router.push('/'); 
        }else{
            setProcessEnd(true);
        }
    }, [isPrivatePage]);

    return processEnd
};

export default useAuthNavigation;
