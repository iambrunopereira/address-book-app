import type { Users } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type FavoritesState = Users[];
const initialState = [] as FavoritesState;
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
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
    resetFavorites: () => initialState,
  },
});

export const { addUserToFavorite, removeUserFromFavorite, addFavoritesList, resetFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
