import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EmergencyDetails from '../screens/emergencyDetails';
import Home from '../screens/home';
import Login from '../screens/login';
import RegisterEmergencyContact from '../screens/registerEmregencyContact';
import RegisterInsurance from '../screens/registerInsurance';
import Splash from '../screens/splash';
import {HomeStackParams, RootStackParams} from '../typings/route';

const RootStack = createNativeStackNavigator<RootStackParams>();
const MainStack = createNativeStackNavigator<HomeStackParams>();

const HomeStack = () => {
  return (
    <MainStack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="home" component={Home} />
      <MainStack.Screen
        name="registerInsurance"
        component={RegisterInsurance}
      />
      <MainStack.Screen
        name="registerEmergencyContact"
        component={RegisterEmergencyContact}
      />
      <MainStack.Screen name="emergencyDetails" component={EmergencyDetails} />
    </MainStack.Navigator>
  );
};

export default function Routing() {
  return (
    <RootStack.Navigator
      initialRouteName="main"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="splash" component={Splash} />
      <RootStack.Screen name="login" component={Login} />
      <RootStack.Screen name="main" component={HomeStack} />
    </RootStack.Navigator>
  );
}
