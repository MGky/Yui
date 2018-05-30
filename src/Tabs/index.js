import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {
  Text,
  View,
  Button
} from 'react-native';

class IndexScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Index!</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <Button
          title="Go to Index"
          onPress={() => this.props.navigation.navigate('Index')}
        />
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Index: IndexScreen,
    Profile: ProfileScreen,
  }
);
