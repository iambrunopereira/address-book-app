
import LoginFormContainer from "@/components/LoginForm/container";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Login | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <LoginFormContainer />
  );
};

export default Page;
