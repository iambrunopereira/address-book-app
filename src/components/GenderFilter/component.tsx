'use client';
import { useState } from 'react';
import styles from './component.module.scss';

type GenderFilterProps = {
    onChange: (value: string) => void;
    defaultValue?: string;
};

const GenderFilter = ({ defaultValue, onChange }: GenderFilterProps) => {
    const [selectedGender, setSelectedGender] = useState(defaultValue ?? 'all');

    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            <h3>Select Gender</h3>
            <form className={styles.genderFilter}>
                <label>
                    <input
                        type="radio"
                        value="all"
                        name="gender"
                        checked={selectedGender === 'all'}
                        onChange={handleSelectionChange}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={selectedGender === 'male'}
                        onChange={handleSelectionChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={selectedGender === 'female'}
                        onChange={handleSelectionChange}
                    />
                    Female
                </label>
            </form>
        </>
    );
};

export default GenderFilter;
