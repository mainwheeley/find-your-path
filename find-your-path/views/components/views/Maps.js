import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button, Text } from 'react-native-elements';
import KeepAwake from 'react-native-keep-awake';
import moment from "moment";
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
/*
export default ({ navigation }) => (
  <View style={styles.container}>
    <Clock />
  </View>
)*/
export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      time: moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss'),
      //data: moment().format("LL"),
    };
  }
  componentDidMount() {
    var intervalId = setInterval (() => {
      this.setState({
        time: moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss'),
        //date: moment().format("LL")
      });
    }, 1000);
    this.setState({intervalId: intervalId});
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  render() {
    return (
      <View style={styles.stopwatch }>
        <Text style={styles.timeText}>
          {this.state.time}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  stopwatch: {
    flex: 0,
    //backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
