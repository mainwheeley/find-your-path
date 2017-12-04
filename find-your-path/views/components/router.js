import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from 'react-native-vector-icons';

import SignIn from '../login.js';
//import SignIn from './Login/Login1.js';
import Maps from './views/TestMap.js';
import Profile from '../Main.js';
import MSetting from './views/MapSettings.js';
import Settings from '../Settings.js';
import Gmaps from './views/gm';
//import Settings from '../Settings.js';
//import Weather from '../../Weather/App.js';
import FavRoutes from '../FavRoutes.js';
import SaveRoute from '../SaveRoute.js';

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
  MSetting: {
    screen: MSetting,
    navigationOptions: {
      title: "Create Route",
      headerStyle
    }
  },
  SaveRoute: {
    screen: FavRoutes,
    navigationOptions: {
      title: "Save Route",
      headerStyle
    }
  },
  Maps: {
    screen: Maps,
    navigationOptions: {
      title: "Map",
      headerStyle
    }
  },
  Gmaps: {
    screen: Gmaps
  }
});

export const ProfileS = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile",
      headerStyle
    }
  },
  FavoriteRoutes: {
    screen: FavRoutes,
    navigationOptions: {
      title: "Favorite Routes",
      headerStyle
    }
  }
});


export const SignedIn = TabNavigator(
  {
    Profile: {
      screen: ProfileS,
      navigationOptions: {
        tabBarLabel: "Profile"
      }
    },
    Maps: {
      screen: MapView,
      navigationOptions: {
        tabBarLabel: "Route"
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings"
      }
    },
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
