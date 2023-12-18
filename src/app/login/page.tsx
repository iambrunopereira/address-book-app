import LoginForm from "@/components/LoginForm/component";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Login | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <LoginForm />
  );
};

export default Page;
