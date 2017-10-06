import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

import { CheckBox, ListItem, Body } from 'native-base';

export default class LoginForm extends Component {
    constructor(props) {
	super(props);
	this.state={stayLog: false};
    }

    changeState() {
	this.setState({
	    stayLog: !this.state.stayLog
	});
	console.log(this.state.stayLog);
    }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
	  <ListItem style={{backgroundColor:'#8BC34A'}}>
	<CheckBox
	    checked={this.state.stayLog}
	    onPress={() => this.setState({
		stayLog: !this.state.stayLog
	    })
	    }
	/>
	<Body>
	<Text> Stay logged in</Text>
	</Body>
	</ListItem>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    checkBoxRow: {
	height: 40,
	flexDirection: 'row',
    },
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
