/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View,StatusBar,TouchableOpacity,AsyncStorage} from 'react-native';
import { Input,Content, Form, Item, Label, Button,Text} from 'native-base';
import { Actions, Tabs } from 'react-native-router-flux';

export default class Tutorial extends Component{
  next_tutorial(){
    AsyncStorage.setItem('tutorial','1');
    Actions.login();
  }
  render() {
    return (
          <Content>
              <Text>Tutorial</Text>
              <TouchableOpacity onPress={this.next_tutorial}>
                  <Text>Next</Text>
              </TouchableOpacity>
              
          </Content>
                
     
    );
  }
}

