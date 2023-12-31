'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import Box from '../common/Box';
import Button from '../common/Button';
import styles from './component.module.scss';
import { DotsLoader } from '../common/DotsLoader';
interface Props {
    onSubmitHandler: (email: string, password:string) => void;
    error: string;
    errorHandler: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}
const LoginFormComponent: React.FC<Props> = ({onSubmitHandler, error, errorHandler, isLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        errorHandler('');

        if (!email || !password) {
            errorHandler('Email and password are required');
            return;
        }

        onSubmitHandler(email, password)
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
                    {!isLoading && <Box flex flexDirection='row' justifyContent='space-between' style={{marginTop: '1rem'}}>
                        <Button variant='primary' type="submit">Login</Button>
                        <Button variant='secondary' onClick={() => router.push('/signup')} style={{marginLeft: '1rem'}}>Signup</Button>
                    </Box>}
                    {isLoading && <Box flex flexDirection='row' justifyContent='space-between' style={{marginTop: '1rem'}}>
                        <DotsLoader />
                    </Box>}
                </form>
            </div>
        </div>
    );
};

export default LoginFormComponent;
