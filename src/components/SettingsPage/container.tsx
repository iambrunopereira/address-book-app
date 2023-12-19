'use client';

import { setGender, setNationalities } from '@/store/slices/settingsSlice';
import { useDispatch, useSelector } from '@/store/store';
import SettingsComponent from './component';

const SettingsContainer: React.FC = () => {
    const settings = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const settingsHandler = (value, type) => {
        if (type == 'nationalities') {
            dispatch(setNationalities(value));
        }
        if (type == 'gender') {
            dispatch(setGender(value));
        }
    };

    return <SettingsComponent settings={settings} settingsHandler={settingsHandler} />;
};

export default SettingsContainer;
