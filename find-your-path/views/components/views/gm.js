import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";



class Gmaps extends Component {
    static navigationOptions = {
        title: "Gmaps"
      };


   /*componentDidMount()
    {
      navigator.geolocatoin.getCurrentPosition()
    } */
  
    render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 20.993776,
            longitude: 105.811417,
            latitudeDelta: 0.021,
            longitudeDelta: 0.021
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Gmaps;
