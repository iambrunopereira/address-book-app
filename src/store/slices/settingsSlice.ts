import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  menuOpened: boolean;
  nationalities: string[];
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    menuOpened: true,
    nationalities: [],
  } as SettingsState,
  reducers: {
    menuToggle: (state) => {
      state.menuOpened = !state.menuOpened;
    },
    nationalitiesSet: (state, action) => {
      state.nationalities = action.payload;
    }
  },
});

export const { menuToggle, nationalitiesSet } = settingsSlice.actions;

export default settingsSlice.reducer;
