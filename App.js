/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert
} from 'react-native';

import Img from './Components/Img'
import Blink from './Components/Blink'
import Input from './Components/Input'
import Button from './Components/Button'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: 'overflow: hidden not working'
    };
  }

  render() {
    let pic = {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      width: '100%',
      height: 110
    };
    return (
      <View style={styles.container}>
        <Img src={pic.url} width={pic.width} height={pic.height} />
        <Blink text='look my eyes' />
        <View style={styles.instructions}>
          <Text>
            {instructions}
          </Text>
          <Button
            ontap={() => {
              Alert.alert('You tapped the button!');
            }}
            text="Press Me"
            font={20}
          />
          <Text>
            {this.state.text}
          </Text>
          <Input
            value={this.state.text}
            placeholder="Type here to translate!"
            rows={3}
            type="text"
            onchange={(text) => this.setState({text})}
            onsubmit={() => { this.setState({text: 'submit'}) }}
            onfocus={() => { this.setState({text: 'focus'}) }}
            onblur={() => { this.setState({text: 'blur'}) }}
          />
          <Input
            style={{backgroundColor: '#fff'}}
          />
        </View>
        <View style={styles.wrap}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, width: 100, alignSelf: 'center', backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}}>
            <View style={styles.abs} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    marginVertical: 10
  },
  instructions: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'gray',
    padding: 10
  },
  abs: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 100,
    bottom: 100,
    backgroundColor: 'black'
  }
});
