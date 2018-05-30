/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

type Props = {};
export default class extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let keyboardType = 'default';
    let returnKeyType = 'done';
    let secureTextEntry = false
    switch (this.props.type) {
      case 'text':
        keyboardType = 'default';
        break;
      case 'number':
        keyboardType = 'numeric';
        break;
      case 'email':
        keyboardType = 'email-address';
        break;
      case 'tel':
        keyboardType = 'phone-pad';
        break;
      case 'search':
        returnKeyType = 'search';
        break;
      case 'password':
        secureTextEntry = true;
        break;
    }
    return (
      <TextInput
        style={[styles.base, this.props.style, { height: (this.props.rows || 1) * 40 }]}
        placeholder={this.props.placeholder || '请输入...'}
        onChangeText={this.props.onchange}
        onSubmitEditing={this.props.onsubmit}
        onBlur={this.props.onblur}
        onFocus={this.props.onfocus}
        value={this.props.value}
        editable={this.props.disabled}
        autoCapitalize={this.props.autocapitalize || 'none'}
        autoCorrect={this.props.autocorrect}
        blurOnSubmit={true}
        returnKeyType={this.props.return || returnKeyType}
        secureTextEntry={secureTextEntry}
        autoFocus={this.props.autofocus}
        keyboardType={keyboardType}
        maxLength={this.props.max || 99999}
        numberOfLines={this.props.rows || 1}
        multiline={!!this.props.rows}
      />
    );
  }
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'transparent',
    width: '100%'
  }
});
