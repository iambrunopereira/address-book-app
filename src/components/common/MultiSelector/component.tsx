import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './component.module.scss';
type Option = {
    value: string;
    label: string;
};

type MultiSelectorProps = {
    options: Option[];
    selectedValues: string[];
    onChange: (selected: string[]) => void;
    dataTestId?: string;
};

const MultiSelector = ({ options, selectedValues, onChange, dataTestId }: MultiSelectorProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectorRef]);

    const toggleOption = (optionValue: string) => {
        const newSelectedValues = selectedValues.includes(optionValue)
            ? selectedValues.filter(value => value !== optionValue)
            : [...selectedValues, optionValue];
        onChange(newSelectedValues);
    };

    return (
        <div ref={selectorRef} className={styles.multiSelector} data-testid={dataTestId}>
            <div className={styles.selectedItems} onClick={() => setIsOpen(!isOpen)} data-testid={`${dataTestId}-selected-items`}>
                {selectedValues.join(', ')}
                <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {isOpen && (
                <div className={styles.optionsList} data-testid={`${dataTestId}-options-list`}>
                    {options.map(option => (
                        <div
                            key={option.value}
                            data-testid={`${dataTestId}-options-items`}
                            className={`${styles.optionItem} ${selectedValues.includes(option.value) ? styles.selected : ''}`}
                            onClick={() => toggleOption(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelector;
