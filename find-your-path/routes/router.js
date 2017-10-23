import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import  { Icon } from 'react-native-elements';

import Test from '../views/test.js';
import Login from '../views/login.js'

export const TestStack = StackNavigator({
    /*TestPage: { 
        screen: Test,
        navigationOptions: {
            title: 'Test'
        }
    }, */
    LoginPage: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    }
}, {
    mode: 'modal',
    headerMode: 'none',
  });