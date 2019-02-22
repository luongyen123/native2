/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {View,StatusBar,TouchableOpacity} from 'react-native';
import { Input,Content, Form, Item, Label, Button,Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {check_internet,check_token} from '../components/check_internet';

export default class Home extends Component{

  componentDidMount(){   
      setTimeout(()=>{
        check_internet();
        check_token(Actions); 
      },1000);                 
  }
  render() {
    return (
          <Content >
            <StatusBar barStyle='dark-content'/>
              <TouchableOpacity>
                  <Text>Splash</Text>
              </TouchableOpacity>
              
          </Content>
                
     
    );
  }
  
}

