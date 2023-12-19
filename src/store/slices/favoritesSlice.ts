import type { Users } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type FavoritesState = Users[];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as FavoritesState,
  reducers: {
    addUserToFavorite: (state, action: PayloadAction<Users>) => {
      const duplicate = state.find(user => user.id === action.payload.id);
      if (!duplicate) {
        state.push(action.payload);
      }
    },
    removeUserFromFavorite: (state, action: PayloadAction<Users>) => {
      return state.filter(user => user.id !== action.payload.id);
    },
    addFavoritesList: (state, action: PayloadAction<FavoritesState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addUserToFavorite, removeUserFromFavorite, addFavoritesList } = favoritesSlice.actions;

export default favoritesSlice.reducer;
