import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

import SignIn from './Login/Login1';
import Maps from './views/Maps';
import Profile from './views/Profile';
import MapSettings from './views/MapSettings';

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
    Maps: {
      screen: MapView,
      navigationOptions: {
        tabBarLabel: "Map"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    }
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
