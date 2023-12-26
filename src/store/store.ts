import { combineReducers, configureStore, createAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import favoritesReducer from './slices/favoritesSlice';
import settingsReducer from './slices/settingsSlice';

import { auth } from './services/authApi';
import { users } from './services/usersApi';

export const resetStore = createAction('reset/store');

const combinedReducer = combineReducers({
  favorites: favoritesReducer,
  settings: settingsReducer,
  [users.reducerPath]: users.reducer,
  [auth.reducerPath]: auth.reducer,
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState | undefined, action: ReturnType<typeof resetStore>) => {
  if (action.type === resetStore.type) {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(users.middleware, auth.middleware),
});

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
