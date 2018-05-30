/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

type Props = {};
export default class extends Component<Props> {
  render() {
    return (
      <Image source={{ uri: this.props.src }} style={[
        styles.base,
        { width: this.props.width, height: this.props.height }
      ]} />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#eeeeee',
  }
});
