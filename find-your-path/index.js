import React, { Component } from 'react';
import {
   AppRegistry,
   Text,
   View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

//import TestStack from './routes/router.js';
//import Test from './views/test.js';
//import Login from './views/login.js';

import  { createRootNavigator } from "./views/components/router.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignedIn: false
    };
  }
  render() {
    const { checkedSignedIn, signedIn } = this.state;

    if (signedIn) {

    }
    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

/*
const App = StackNavigator({
    LoginPage: {
        screen: Login
    },
    TestPage: {
        screen: Test
    }
}, *//*{
    mode: 'modal',
    headerMode: 'none',
  });

/*class App extends Component {
   render() {
    //const {navigate} = this.props.navigation;
    return (
    <View>
       <TestStack />;
    </View>
    );
   }
} */

/*const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
   },
}); */
//export default App;
AppRegistry.registerComponent('fyp', () => App);
