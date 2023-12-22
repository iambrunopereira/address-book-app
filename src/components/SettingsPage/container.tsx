'use client';

import { setGender, setNationalities } from '@/store/slices/settingsSlice';
import { useDispatch, useSelector } from '@/store/store';
import { Gender } from '@/types/store';
import SettingsComponent from './component';

const SettingsContainer: React.FC = () => {
    const settings = useSelector(state => state.settings);
    const dispatch = useDispatch();

    const settingsHandler = (value: unknown, type: string) => {
        if (type == 'nationalities') {
            dispatch(setNationalities((value as string[])));
        }
        if (type == 'gender') {
            dispatch(setGender((value as Gender)));
        }
    };

    return <SettingsComponent settings={settings} settingsHandler={settingsHandler} />;
};

export default SettingsContainer;
