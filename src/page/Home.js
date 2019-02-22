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

export default class Home extends Component{
  render() {
    return (
          <Content>
              <TouchableOpacity>
                  <Text>Home</Text>
              </TouchableOpacity>
              
          </Content>
                
     
    );
  }
}

