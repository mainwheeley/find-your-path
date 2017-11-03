import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk'
const util = require("util");
//var {navigate} = this.props.navigation;

class Login extends React.Component {

  static navigationOptions = {
    title: "Login"
  };

  loganav(nav)
  {
    var x = this._fbAuth();
    //console.warn(x);
    nav('SignedIn');
  }

   _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(
         function(result) {
            if (result.isCancelled) {
               alert('Login cancelled');
               return 0;
            } else {
               alert('Login success with permissions: '
               +result.grantedPermissions.toString());
               return 1;
                //navigate('SignedIn');
            }
         },
         function(error) {
            alert('Login fail with error: ' + error);
            return 0;
         }
      );
   }

   render() {
    var {navigate} = this.props.navigation;
   console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null));
      return (

         <View style={styles.container}>
            <TouchableOpacity onPress={ this.loganav(navigate)
              }>
               <Text>Login with Facebook</Text>
            </TouchableOpacity>
         </View>

      );
   }
}

const styles = StyleSheet.create({
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
});

export default Login;
