import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Profile：${navigation.getParam('name', 'no-one')}`,
      headerStyle: {
        backgroundColor: 'transparent'
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="btn"
          color="#000"
        />
      ),
    };
  };

  render() {
    const name = this.props.navigation.getParam('name', 'no-one');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen {name}</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.push('Profile', {
            name: Date.now()
          })}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({name: 'Updated!'})}
        />
      </View>
    );
  }
}
