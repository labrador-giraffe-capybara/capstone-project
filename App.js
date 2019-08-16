// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './views/Login';
import Register from './views/Register';
import HomeScreen from './views/Home';
import Map from './views/Map';
import Camera from './views/Camera';
import Location from './views/Location';
import LiveView from './views/LiveView';
import SideMenu from './views/SideMenu';
import AccountInfo from './views/AccountInfo';
import StarredWalks from './views/StarredWalks';
import PastWalks from './views/PastWalks';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Home: HomeScreen,
    Map: Map,
    Camera: Camera,
    Location: Location,
    LiveView: LiveView,
    SideMenu: SideMenu,
    AccountInfo: AccountInfo,
    StarredWalks: StarredWalks,
    PastWalks: PastWalks,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
