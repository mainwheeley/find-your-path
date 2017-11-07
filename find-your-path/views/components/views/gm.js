import React, { Component } from "react";
import { Modal, AppRegistry, StyleSheet, Text, View, ListView, FlatList, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Button, ButtonGroup } from 'react-native-elements';
import Polyline from '@mapbox/polyline';


 const {width, height} = Dimensions.get('window')
 const S_H = height;
 const S_W = width;
 const A_R = width / height;
 const LD = 0.0922;
 const LGD = LD = A_R;
 var here;

class Gmaps extends Component {
    static navigationOptions = {
        title: "Gmaps"
      };
      constructor(props) {
        super(props)
    var {state} = props.navigation;
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
            coords: [],
            dest: state.params.dest,
            miles: state.params.miles,
            modalVis: false,
            directions: []
          }

      }

      watchID: ?number = null

    setModalVis(vis)
      {
        this.setState({modalVis: vis});
      }


   componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position) =>{
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);
        here = parseFloat(lat) + ", " + parseFloat(long);
        this.getDirections(here, this.state.dest);
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
      //this.getDirections("52.5200, 13.4050", "41.0082, 28.9784");
      /* console.warn(here);
      this.getDirections(here, "Naperville, IL"); */

      //console.warn("hello!");
      //this.getDirections("40.1884979, 29.061018", "41.0082,28.9784");
    }

    async getDirections(startLoc, destinationLoc) {
      try {
          let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
          let respJson = await resp.json();
          //console.warn("hello2")
          //console.warn(destinationLocation)
          //console.warn(JSON.stringify(respJson.routes[0].legs[0].steps));
          var directions = [];
          var count = 1;
          respJson.routes[0].legs[0].steps.forEach(function(i)
          {
            var dist = i.distance.text;
            var html = i.html_instructions;

            var nohtml = html.replace(/b/g, "");
            nohtml = nohtml.replace(/</g, "");
            nohtml = nohtml.replace(/>/g, "");
            nohtml = nohtml.replace(/\//g, "");


            var dir = count + ": " + "In " + dist+ " " + nohtml;
            directions.push(dir);
            count++;
          });
          this.setState({directions: directions});
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
        alert(error + " getdirections error");
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

       <MapView style={styles.map} initialRegion={{
          latitude:41.0082,
          longitude:28.9784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>

        <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>

        </MapView>
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
            <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVis}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <Button
      backgroundColor='#03A9F4'
      title='Close Directions'
      onPress={() => this.setModalVis(false)}
    />

        <FlatList
          data={this.state.directions}
          renderItem={({item}) => <Text>{item}</Text>}
          keyExtractor={(item,index)=> index}
        />
          </Modal>

            <Button
      backgroundColor='#03A9F4'
      title='Directions'
      onPress={() => this.setModalVis(true)}
    />
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
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
