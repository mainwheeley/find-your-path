import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Polyline from '@mapbox/polyline';


 const {width, height} = Dimensions.get('window')
 const S_H = height;
 const S_W = width;
 const A_R = width / height;
 const LD = 0.0922;
 const LGD = LD = A_R;

class Gmaps extends Component {
    static navigationOptions = {
        title: "Gmaps"
      };
      constructor(props) {
        super(props) 
          
        this.state = {
            initialPosition: {
              latitude: 0,
              longitude: 0,
              latitudeDelta: 0,
              longitudeDelta: 0
            },
            markerPosition: {
              latitude: 0,
              longitude: 0
            },
            coords: []
          }
        
      }

      watchID: ?number = null



   componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position) =>{
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var initialRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LD,
          longitudeDelta: LGD
        }

        this.setState({initialPosition: initialRegion})
        this.setState({markerPosition: initialRegion})        
      }), (error) => alert(JSON.stringify(error) + "component did mount error");
      this.watchID = navigator.geolocation.watchPosition((position) => {
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);

        var lastRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LD,
          longitudeDelta: LGD
        }
        this.setState({initialPosition: lastRegion});
        this.setState({markerPosition: lastRegion});

      
      })
      var here = this.state.initialPosition.longitude + " , " + this.state.initialPosition.latitude; 
      
      this.getDirections(here, "41.8781, 87.6798");
      console.warn("hello!");
      //this.getDirections("40.1884979, 29.061018", "41.0082,28.9784");
    } 

    async getDirections(startLoc, destinationLoc) {
      try {
          let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
          console.warn(JSON.stringify(resp));
          let respJson = await resp.json();
          console.warn("hello2")
          console.warn(destinationLocation) 
          let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
          let coords = points.map((point, index) => {
              return  {
                  latitude : point[0],
                  longitude : point[1]
              }
          })
                   
          this.setState({coords: coords})
          return coords
      } catch(error) {
          return error
      }
  }

    componentWillUnmount()
    {
      navigator.geolocation.clearWatch(this.watchID);

    }
  
    render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          region={this.state.initialPosition}
          style={StyleSheet.absoluteFillObject}>
          <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}>
                </View>
              </View>
              </MapView.Marker>
             <MapView.Polyline
             coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red">
            </MapView.Polyline>
            </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: "hidden",
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 20/2,
    borderWidth: 3,
    borderColor: 'white',
    overflow:'hidden',
    backgroundColor: '#003AFF'
  },
  container: {
    flex: 1
  }
});

export default Gmaps;
