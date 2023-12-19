"use client";

import { setGender, setNationalities } from "@/store/slices/settingsSlice";
import { useSelector } from "@/store/store";
import { Gender } from "@/types/store";
import { useDispatch } from "react-redux";
import UsersSearchComponent from "./component";

const UsersSearchContainer: React.FC = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  
  const clearFilters = () => {
    dispatch(setNationalities([]));
    dispatch(setGender(Gender.All));
  }

  return (
    <UsersSearchComponent settings={settings} clearHandler={clearFilters} gender={settings.gender} nationalities={settings.nationalities}/>
  );
};

export default UsersSearchContainer;