import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'

class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },
})

export default test;
//AppRegistry.registerComponent('test', () => test)