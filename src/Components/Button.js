/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text
} from 'react-native';

type Props = {};
export default class extends Component<Props> {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.props.ontap}
      >
        <View style={[styles.base, this.props.style]}>
          <Text style={{ color: this.props.color, fontSize: this.props.font }}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});

