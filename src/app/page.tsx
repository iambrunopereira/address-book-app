import { config } from "@/configs";
import { Metadata, NextPage } from "next/types";

export const metadata: Metadata = {
  title: `Home Page | ${config.appName}`,
};

const Page: NextPage = () => {
  return (
    <main >
      <div >
        <h1>
          Hello world
        </h1>
      </div>
    </main>
  )
};

export default Page;