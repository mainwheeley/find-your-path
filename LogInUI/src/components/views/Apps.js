import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/FontAwesome';

import Profile from './Profile';
import Maps from './Maps'

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Route map</Text>
      </View>
    );
  }
}


const SimpleApp = TabNavigator({
  Map: {
    screen: Maps,
    navigationOptions: {
      tabBarLabel: 'Map'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
    }
  }
},
{
  tabBarOptions: {
    style: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0
    }
  }
}
);

export default class App extends Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 26,
    height: 26
  }
});

//AppRegistry.registerComponent('LogInUI', () => LogInUI);
