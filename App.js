/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,StatusBar,TouchableOpacity} from 'react-native';
import { Container, Header, Tab } from 'native-base';
import Login from './src/page/Login';
import Register from './src/page/register';
import Splash from './src/page/Splash';
import Profile from './src/page/profile';
import Home from './src/page/Home';
import Tutorial from './src/page/Tutorial';


import { Router, Scene, Stack ,Tabs} from 'react-native-router-flux';


export default class App extends Component{
 
  render() {
    return (
      <Router hideNavBar={true}>
        <Tabs key="root" hideTabBar={true}> 
        
          <Tabs key="root1" initial={true} hideTabBar={true}>
            <Scene key="splash" component={Splash} headerBackTitle={false} initial={true}/>
            <Scene key="login" component={Login}  /> 
            <Scene key="tutorial" component={Tutorial}  /> 
            <Stack key="root">
              <Scene key="login" component={Login}  />
              <Scene key="signup" component={Register}/>  
            </Stack>  
          </Tabs>  

          <Tabs key="root2"> 
            <Scene key="profile" component={Profile} headerBackTitle={false}/>
            <Scene key="home" component={Home} headerBackTitle={false}/>
          </Tabs>
        </Tabs>

      </Router>

    );
  }
}

