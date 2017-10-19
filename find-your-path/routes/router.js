import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import test from '../views/test.js';

export const testStack = StackNavigator({
    Test: { 
        screen: Test,
        navigationOptions: {
            title: 'Test'
        }
    }
})