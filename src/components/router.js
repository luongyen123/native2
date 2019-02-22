import React, {Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from '../page/Login';
import Register from '../page/register';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title={login} initial={true} />
                    <Scene key="signup" component={Register} title={Register} />
                </Stack>
            </Router>
        )
    }
}