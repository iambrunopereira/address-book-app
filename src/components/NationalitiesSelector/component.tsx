"use client"
import { useState } from 'react';
import MultiSelector from '../common/MultiSelector/component';
import { useTranslation } from 'react-i18next';

type NationalitiesSelectorProps = {
    onChange: (value: string[]) => void;
    defaultValue?: string[]
};

const NationalitiesSelector = ({defaultValue, onChange}: NationalitiesSelectorProps ) => {
    const [selectedNationalities, setSelectedNationalities] = useState<string[]>(defaultValue ?? []);
    const { t } = useTranslation();
    const nationalities = [
        { value: 'CH', label: 'CH' },
        { value: 'ES', label: 'ES' },
        { value: 'FR', label: 'FR' },
        { value: 'GB', label: 'GB' }
    ];
    const handleSelectionChange = (selected: string[]) => {
        setSelectedNationalities(selected);
        onChange(selected);
    };

    return (
        <div>
            <h3>{t(`filters__nationalities_input_label`)}</h3>
            <MultiSelector 
                options={nationalities} 
                selectedValues={selectedNationalities} 
                onChange={handleSelectionChange} 
            />
        </div>
    );
};

export default NationalitiesSelector;
