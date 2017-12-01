import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   Text,
   View,
   TouchableOpacity
} from 'react-native';
//import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
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
    //nav('Maps')
  }


  initUser(token) {
    //fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    fetch('https://graph.facebook.com/v2.5/me?access_token=' + token +"&fields=email,name,friends")
    .then((response) => response.json())
    .then((json) => {
      // Some user object has been set up somewhere, build that user here
      //alert("here2");
      var user = {};
      user.name = json.name
      user.id = json.id
      user.email = json.email
      user.username = json.name
      user.loading = false
      user.loggedIn = true
      //user.avatar = setAvatar(json.id)
      alert(JSON.stringify(user));
      
      /*$.ajax({
        url: 'http://localhost:3000/fbdata',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(user),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            console.warn(JSON.stringify(data));
            console.warn("success!");
        },
        error: function( jqXhr, textStatus, errorThrown ){
          console.warn("error ajax");  
          console.warn( errorThrown );
        }
    }); */

    fetch('http://10.0.0.31:3000/fbdata', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((response) => response.json())
     .then((responseText) => {
      console.log(responseText);
      console.warn("here4");

    })
    .catch((error) => {
      console.warn(error);
      console.warn("here5");
    }); 
    
    
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
    })
  }

  /* _fbAuth() {
      LoginManager.logInWithReadPermissions(['public_profile']).then(
         function(result) {
            if (result.isCancelled) {
               alert('Login cancelled');
               return 0;
            } else {
               alert('Login success with permissions: '
               +result.grantedPermissions.toString());
               alert('thang');
               AccessToken.getCurrentAccessToken().then((data) => {
                //const { accessToken } = data
                alert("here is the fbdata");
                alert(data.toString());
                this.initUser(data)
              })
               return 1;
                //navigate('SignedIn');
            }
         },
         function(error) {
            alert('Login fail with error: ' + error);
            return 0;
         }
      );
   } */

   
  /* render() {
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
} */

render()
{
  AccessToken.getCurrentAccessToken().then(
    (data) => {
      //alert(JSON.stringify(data));
      /*if (data !== null)
      {
        this.props.navigation.navigate('SignedIn')
      }*/
    } //Refresh it every time
);
  return (
    <View>
      
    <LoginButton
      publishPermissions={["publish_actions"]}
      onLoginFinished={
        (error, result) => {
          if (error) {
            alert("login has error: " + result.error);
          } else if (result.isCancelled) {
            alert("login is cancelled.");
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                //alert(data.accessToken.toString())
                this.initUser(data.accessToken);
              }
              
            )
            this.props.navigation.navigate('SignedIn')
          }
        }
      }
      onLogoutFinished={() => alert("logout.")}/>
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
