
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from "react-icons/io";
import { Button } from '../Button';
import { Typography } from '../Typography';
const BackButton = () => {
    const router = useRouter();

    const goBack = () => router.back();

    return (
        <Button variant='link' onClick={goBack} style={{display: 'flex', justifyContent: 'center'}}>
            <IoMdArrowBack /> <Typography variant='body1' style={{marginLeft: '0.5rem'}}> Back</Typography>
        </Button>
    );
};

export default BackButton;
