import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Index from './Screens/Index'
import Profile from './Screens/Profile'
import Bangumi from './Screens/Bangumi'
import Login from './Modals/Login'

const MainStack = createStackNavigator(
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

const App = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Login: {
      screen: Login,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default class extends Component {
  render() {
    return <App/>;
  }
}