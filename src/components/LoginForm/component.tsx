'use client';
import { useUserLoginMutation } from '@/store/services/authApi';
import { CookieManager } from '@/utils/cookies';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Box from '../common/Box';
import { Button } from '../common/Button';
import styles from './component.module.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userLogin] = useUserLoginMutation();
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError('');

        // Example validation
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        userLogin({email, password})
        .unwrap()
        .then((res) => {
            if(res.data.access_token){
                CookieManager.set('token', res.data.access_token, 7);

                router.push('/');
            }
        }).catch((error: Error) => {
            setError('Login failed. Please try again.');
        });
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <Box>
                        <Button variant='link' onClick={() => router.push('/forgot-password')} style={{display: 'flex', justifyContent: 'flex-end'}}>Forgot password?</Button>
                    </Box>
                    <Box flex flexDirection='row' justifyContent='space-between' style={{marginTop: '1rem'}}>
                        <Button variant='primary' type="submit">Login</Button>
                        <Button variant='secondary' onClick={() => router.push('/register')} style={{marginLeft: '1rem'}}>Signup</Button>
                    </Box>
                    
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
