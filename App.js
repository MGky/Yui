import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Index from './src/Screens/Index'
import Profile from './src/Screens/Profile'
import Bangumi from './src/Screens/Bangumi'
import SignIn from './src/Modals/SignIn'
import { View } from 'react-native';

const ScreensStack = createStackNavigator(
  {
    Index,
    Bangumi,
    Profile,
  },
  {
    initialRouteName: 'Index',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f25d8e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const RootTabs = createBottomTabNavigator(
  {
    Index,
    Bangumi,
    Profile
  }
)

const RootStack = createStackNavigator(
  {
    ScreensStack,
    SignIn,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class extends Component {
  render() {
    return (
      <RootStack>
        <RootTabs/>
      </RootStack>
    );
  }
}