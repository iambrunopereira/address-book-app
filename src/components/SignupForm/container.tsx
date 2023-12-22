'use client';

import { useUserSignupMutation } from '@/store/services/authApi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SignupFormComponent from './component';

const SignupFormContainer: React.FC = () => {
    const [userSignup] = useUserSignupMutation();
    const router = useRouter();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    
    function submitHandler (email: string, password: string){
        setIsLoading(true);
        userSignup({email, password})
        .unwrap()
        .then((res) => {
            setIsLoading(false)
            if(res.data.code == 'invalid_signup'){
                setError('Signup failed. Please try again.');
                
            }
            if(!res.data.code){
                router.push('/login');
            }
        }).catch(() => {
            setIsLoading(false)
            setError('Signup failed. Please try again.');
        });

    } 
    

    return <SignupFormComponent onSubmitHandler={submitHandler} error={error} errorHandler={setError} isLoading={isLoading}/>;
};

export default SignupFormContainer;
