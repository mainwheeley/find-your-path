import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';


export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <View
      style={{
        backgroundColor: "#bcbec1",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: "center",
        marginBottom: 20
      }}
    >
      <Text style={{ color: "white", fontSize: 28 }}>JA</Text>
    </View>
    <View>
      <Text style={styles.name}>Name: Johnny Appleseed</Text>
      <Text style={styles.data}>Distance Traveled: 50 miles</Text>
      <Text style={styles.data}>Hours Logged: 15 hours</Text>
    </View>
    <Button
      backgroundColor="#03A9F4"
      title="SIGN OUT"
      onPress={() => navigation.navigate("SignedOut")}
    />
  </View>
)

const styles = StyleSheet.create({
  name: {
    alignSelf: 'center',
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#222222'
  },
  data: {
    alignSelf: 'center',
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '700'
  }
})
