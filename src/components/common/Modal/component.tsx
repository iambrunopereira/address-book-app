import { MdClose } from 'react-icons/md';
import Box from '../Box';
import Button from '../Button';
import styles from './component.module.scss';
import { Divisor } from '../Divisor';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <Box flex justifyContent="end" >
                    <Button  variant="clear" onClick={onClose}>
                        <MdClose />
                    </Button> 
                </Box>
                <Divisor />
                {children}
            </div>
        </div>
    );
};

export default Modal;