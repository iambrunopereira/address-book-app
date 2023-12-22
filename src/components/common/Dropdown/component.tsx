import { useState, useRef, useEffect } from 'react';
import styles from './component.module.scss';

type DropdownProps = {
    triggerElement: React.ReactNode; 
    children: React.ReactNode; 
};

const Dropdown = ({ triggerElement, children }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {triggerElement}
            </div>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
