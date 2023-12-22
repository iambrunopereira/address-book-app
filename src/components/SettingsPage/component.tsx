

import { Divisor } from "..";
import GenderFilter from "../GenderFilter";
import NationalitiesSelector from "../NationalitiesSelector";
import BackButton from "../common/BackButton";
import Box from "../common/Box";


interface SettingsProps {
  settings: any,
  settingsHandler: (event: any, type: any) => void;
}

const SettingsComponent: React.FC<SettingsProps> = ({settings, settingsHandler}) => {

   

  return (
    <>
      <Box>
        <BackButton />
      </Box>
      <Divisor />
      <Box>
         <NationalitiesSelector defaultValue={settings?.nationalities} onChange={(e: any) => settingsHandler(e, 'nationalities')} />
      </Box>
      <Box m="1rem 0 0 0">
            <GenderFilter defaultValue={settings?.gender} onChange={(e) => settingsHandler(e, 'gender')} />
      </Box>
    </>
  );
};

export default SettingsComponent;
