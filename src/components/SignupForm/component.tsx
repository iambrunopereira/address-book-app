'use client';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import Box from '../common/Box';
import Button from '../common/Button';
import { DotsLoader } from '../common/DotsLoader';
import styles from './component.module.scss';

interface Props {
    onSubmitHandler: (email: string, password:string) => void;
    error: string;
    errorHandler: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
}

const SignupFormComponent: React.FC<Props> = ({onSubmitHandler, error, errorHandler, isLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        errorHandler('');

        if (!email || !password || !passwordConfirmation) {
            errorHandler('All the fields are required');
            return;
        }
        if (password !== passwordConfirmation) {
            errorHandler('The passwords are not equal');
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
                    <div className={styles.inputGroup}>
                        <label htmlFor="passwordConfirmation">Password Confirmation</label>
                        <input
                            type="password"
                            id="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    {!isLoading &&  <Box flex flexDirection='row' justifyContent='space-between' style={{marginTop: '1rem'}}>
                        <Button variant='primary' type="submit">Create</Button>
                        <Button variant='secondary' onClick={() => router.push('/login')} style={{marginLeft: '1rem'}}>Login</Button>
                    </Box>}
                    {isLoading && <Box flex flexDirection='row' justifyContent='space-between' style={{marginTop: '1rem'}}>
                        <DotsLoader />
                    </Box>}
                </form>
            </div>
        </div>
    );
};

export default SignupFormComponent;
