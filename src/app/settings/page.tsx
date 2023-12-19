import SettingsContainer from '@/components/SettingsPage/container';
import { config } from '@/configs';
import { Metadata, NextPage } from 'next/types';

export const metadata: Metadata = {
    title: `User Settings | ${config.appName}`,
};

const Page: NextPage = () => {
    return (
        <SettingsContainer />
    );
};

export default Page;
