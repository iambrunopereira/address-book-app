"use client";

import { useAddFavoriteUserMutation, useRemoveFavoriteUserMutation } from "@/store/services/usersApi";
import { addUserToFavorite, removeUserFromFavorite } from "@/store/slices/favoritesSlice";
import { setGender, setNationalities } from "@/store/slices/settingsSlice";
import { RootState, useSelector } from "@/store/store";
import { Users } from "@/types";
import { Gender } from "@/types/store";
import { useDispatch } from "react-redux";
import UsersSearchComponent from "./component";

const UsersSearchContainer: React.FC = () => {
  const store = useSelector((state: RootState) => state);

  const settings = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [addFavoriteUser] = useAddFavoriteUserMutation();
  const [removeFavoriteUser] = useRemoveFavoriteUserMutation();
  
  const clearFilters = () => {
    dispatch(setNationalities([]));
    dispatch(setGender(Gender.All));
  }

  

  const handleFavorite = (isFavorite: boolean, user: Users) => {

    if (isFavorite) {
      removeFavoriteUser(user.id)
        .unwrap()
        .then(() => {
          dispatch(removeUserFromFavorite(user));
        }).catch((error: Error) => {
          console.error(error);
        });
    } else {
      addFavoriteUser(user.id)
        .unwrap()
        .then(() => {
          dispatch(addUserToFavorite(user));
        }).catch((error: Error) => {
          console.error(error);
        });
    }
  }
  return (
    <UsersSearchComponent settings={settings} clearHandler={clearFilters} gender={settings.gender} nationalities={settings.nationalities} favorites={favorites} favoritesHandler={handleFavorite}/>
  );
};

export default UsersSearchContainer;