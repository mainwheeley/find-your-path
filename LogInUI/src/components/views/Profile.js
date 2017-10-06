import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';


export default ({ navitgation }) => (
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
    <Button
      backgroundColor="#03A9F4"
      title="SIGN OUT"
      //onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
    />
  </View>
)
