import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
//import MapView from 'react-native-maps';


MapStyle =
[
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

/*
<MapView
  //provider={PROVIDER_GOOGLE}
  //customMapStyle={MapStyle}
  style={styles.map}
  initialRegion={{
    latitude: 40.426990,
    longitude: -86.916448,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }}
  //onRegionChange={this.onRegionChange}
/>
*/
export default ({ navitgation }) => (
  <View >
    <Text>MapView</Text>

  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
