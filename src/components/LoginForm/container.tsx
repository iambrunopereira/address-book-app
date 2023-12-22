'use client';

import { useUserLoginMutation } from '@/store/services/authApi';
import { CookieManager } from '@/utils/cookies';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoginFormComponent from '.';

const LoginFormContainer: React.FC = () => {
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    
    function submitHandler (email: string, password: string){
        setIsLoading(true);
        userLogin({email, password})
        .unwrap()
        .then((res) => {
            
            if(res.data.error == 'invalid_grant'){
                setError('Login failed. Wrong email or password.');
                setIsLoading(false)
            }
            if(res.data.access_token){
                CookieManager.set('token', res.data.access_token, 7);

                router.push('/');
            }
            
        }).catch(() => {
            setIsLoading(false)
            setError('Login failed. Please try again.');
        });

    } 
    

    return <LoginFormComponent onSubmitHandler={submitHandler} error={error} errorHandler={setError} isLoading={isLoading}/>;
};

export default LoginFormContainer;
