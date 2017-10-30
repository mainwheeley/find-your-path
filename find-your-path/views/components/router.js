import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

//import SignIn from '../login.js';
import SignIn from './Login/Login1.js';
import Maps from './views/Maps';
import Profile from '../Main.js';
import MapSettings from './views/MapSettings';
//import Settings from '../Settings.js';
//import Weather from '../../Weather/App.js';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const MapView = StackNavigator({
  MapSettings: {
    screen: MapSettings,
    navigationOptions: {
      title: "Settings",
      headerStyle
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: "Map",
      headerStyle
    }
  }
});


export const SignedIn = TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    },
    Maps: {
      screen: MapView,
      navigationOptions: {
        tabBarLabel: "Map"
      }
    },
    /*Settings: {
      screen: ,
      navigationOptions: {
        tabBarLabel: "Settings"
      }
    },*/
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
