export interface SettingsState {
    menuOpened: boolean;
    nationalities: string[];
    gender: Gender;
  }
  
  export enum Gender {
    Female = 'female',
    Male = 'male',
    All = 'all'
  }