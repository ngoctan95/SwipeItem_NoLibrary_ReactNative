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
  View
} from 'react-native';
import ContactList from './ContactList';

export default class App extends Component {
  render() {
    return (
      <View >
        <Text style={styles.toolbar}>Contacts</Text>
        <ContactList style={styles.content}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar:{
    backgroundColor:'#2c3e50',
    color:'#fff',
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  content:{
    padding:10,
    flex:1
  }
});
