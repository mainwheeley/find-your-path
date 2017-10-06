import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import { StackNavigator } from 'react-native-maps';
import LoginForm from './LoginForm';


export default ({ navitgation }) => (
  <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../../images/FYP.png')}
        />
        <Text style={styles.title}>An app made for github using React Native</Text>
    </View>
    <View style={styles.formContainer}>
      <LoginForm />
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
  }
});
