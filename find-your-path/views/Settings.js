import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default ({navigation}) => (
      <View>
        <Text style={styles.style}>Settings</Text>
      </View>
    );


const styles = StyleSheet.create({
  style: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});
