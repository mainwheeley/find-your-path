import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
/*
constructor () {
  super()
  this.state = {
    selectedIndex: 0
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}*/


//const buttons = ['Walk', 'Run', 'Bike']

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>Distance</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='10'
      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType='next'
      style={styles.input}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Create Route'
      onPress={() => navigation.navigate('Maps')}
    />
  </View>
)

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FFF',
     alignItems: 'center',
     justifyContent: 'center'
   },
   input: {
     width: 100,
     height: 40,
     backgroundColor: 'rgba(0,0,0,0.2)',
     marginBottom: 10,
     color: '#FFF',
     paddingHorizontal: 10
   },
 })
