"use client";

import { setGender, setNationalities } from "@/store/slices/settingsSlice";
import { RootState, useSelector } from "@/store/store";
import { Gender } from "@/types/store";
import { useDispatch } from "react-redux";
import UsersSearchComponent from "./component";
import { Dispatch } from "@reduxjs/toolkit";
import { Users } from "@/types";
import { addUserToFavorite, removeUserFromFavorite } from "@/store/slices/favoritesSlice";
import UsersFavoritesComponent from "./component";
import { useAddFavoriteUserMutation, useRemoveFavoriteUserMutation } from "@/store/services/usersApi";

const UsersFavoritesContainer: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const favorites: Users[] = useSelector((state: RootState) => state.favorites);
  const [addFavoriteUser] = useAddFavoriteUserMutation();
  const [removeFavoriteUser] = useRemoveFavoriteUserMutation();

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
    <UsersFavoritesComponent favorites={favorites} favoritesHandler={handleFavorite}/>
  );
};

export default UsersFavoritesContainer;