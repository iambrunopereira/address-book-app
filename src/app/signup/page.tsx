import SignupFormContainer from "@/components/SignupForm/container";
import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Signup | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <SignupFormContainer />
  );
};

export default Page;
