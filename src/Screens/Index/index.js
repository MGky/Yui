import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class extends Component {
  static navigationOptions = {
    title: '首页'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Index Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Bangumi"
          onPress={() => this.props.navigation.navigate('Bangumi')}
        />
        <Button
          onPress={() => this.props.navigation.navigate('SignIn')}
          title="Open Login Modal"
        />
      </View>
    );
  }
}
