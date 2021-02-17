import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
    return(
      <WelcomeScreen/>
    );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);