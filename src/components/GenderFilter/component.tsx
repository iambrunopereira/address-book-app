'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './component.module.scss';

type GenderFilterProps = {
    onChange: (value: string) => void;
    defaultValue?: string;
};

const GenderFilter = ({ defaultValue, onChange }: GenderFilterProps) => {
    const [selectedGender, setSelectedGender] = useState(defaultValue ?? 'all');
    const { t }= useTranslation();
    const handleSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedGender(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            <h3>{t(`filters__gender_input_label`)}</h3>
            <form className={styles.genderFilter}>
                <label>
                    <input
                        type="radio"
                        value="all"
                        name="gender"
                        checked={selectedGender === 'all'}
                        onChange={handleSelectionChange}
                    />
                    {t(`filters__gender_options__all`)}
                </label>
                <label>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={selectedGender === 'male'}
                        onChange={handleSelectionChange}
                    />
                    {t(`filters__gender_options__male`)}
                </label>
                <label>
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={selectedGender === 'female'}
                        onChange={handleSelectionChange}
                    />
                    {t(`filters__gender_options__female`)}
                </label>
            </form>
        </>
    );
};

export default GenderFilter;
