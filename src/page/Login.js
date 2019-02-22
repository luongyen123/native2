/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View,StatusBar,TouchableOpacity} from 'react-native';
import { Input,Content, Form, Item, Label, Button,Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component{
  render() {
    return (
          <View>             
              <Text>Login</Text>
              <TouchableOpacity onPress={()=>{Actions.signup()}}>
                  <Text>Register </Text>
              </TouchableOpacity>
          </View>
                
     
    );
  }
}

