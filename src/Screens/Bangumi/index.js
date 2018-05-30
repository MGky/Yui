import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

export default class extends Component {
  static navigationOptions = {
    // headerTitle: <LogoTitle />,
    title: '番剧'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Index Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}
