import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  splash: undefined;
  login: undefined;
  main: NavigatorScreenParams<HomeStackParams>;
};

export type HomeStackParams = {
  home: undefined;
  registerInsurance: undefined;
  registerEmergencyContact: undefined;
  emergencyDetails: undefined;
};
