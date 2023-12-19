import UsersFavoritesContainer from "@/components/UserFavorites/container";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Home Page | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <UsersFavoritesContainer />
  );
};

export default Page;
