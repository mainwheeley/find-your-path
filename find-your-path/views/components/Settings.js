import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text>Placeholder for the settings page.</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
