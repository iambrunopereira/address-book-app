import LogoutHandler from "@/components/Logout/component";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Logout | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <LogoutHandler />
  );
};

export default Page;
