import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import { StayLogged } from '../StayLogged';

export default ({ navigation }) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../images/FYP.png')}
        />
        <Text style={styles.title}>An app made using React Native</Text>
    </View>
    <View style={styles.formContainer}>
      <View style={styles.fcontainer}>
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

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("SignedIn")}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BC34A'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 110,
    height: 100
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    width: 160,
    textAlign: 'center',
    opacity: 0.9
  },
  fContainer: {
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
