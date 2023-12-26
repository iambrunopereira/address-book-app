
import { Gender, SettingsState } from '@/types/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: SettingsState = {
  menuOpened: true,
  nationalities: [],
  gender: Gender.All,
};

const reducers = {
  menuToggle: (state: SettingsState) => {
    state.menuOpened = !state.menuOpened;
  },
  setNationalities: (state: SettingsState, action: PayloadAction<string[]>) => {
    state.nationalities = action.payload;
  },
  setGender: (state: SettingsState, action: PayloadAction<Gender>) => {
    state.gender = action.payload;
  },
  resetSettings: () => initialState,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers,
});

export const { menuToggle, setNationalities, setGender, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
