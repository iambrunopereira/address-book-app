import UsersSearchContainer from "@/components/UserSearch/container";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Home Page | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <UsersSearchContainer />
  );
};

export default Page;
