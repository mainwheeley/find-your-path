import React, { Component } from "react";
import { Modal, AppRegistry, StyleSheet, Text, View, ListView, FlatList, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Button, ButtonGroup } from 'react-native-elements';
import Polyline from '@mapbox/polyline';
import Tts from 'react-native-tts';
import { lang } from "moment";
import Clock from './Maps.js';
import pick from 'lodash/pick';
import haversine from 'haversine';

Tts.setDefaultLanguage('en-IE');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');

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
        directions: [],
        dirCount: 0,
        gencoords: [],
        sf: false,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {}
    }

  }

  watchID: ?number = null;
  watchID2: ?number = null;

    setModalVis(vis)
      {
        this.setState({modalVis: vis});
      }
    toggle() {
        this.setState({
            sf: !this.state.sf
        });
    }

    onStart()
    {
      if (this.state.sf) {
        return (
            <Button

            backgroundColor='#03A9F4'
            title='Modify'
            onPress={() => this.props.navigation.navigate('MSetting')}
            />
        );
    } else {
        return null;
    }
}
  tracking() {
    navigator.geolocation.getCurrentPosition(
      (position) => {},
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID2 = navigator.geolocation.watchPosition((position) => {
      const { routeCoordinates, distanceTravelled } = this.state;
      const newLatLngs = {latitude: position.coords.latitude, longitude: position.coords.longitude };
      const positionLatLngs = pick(position.coords, ['latitude', 'longitude']);
      this.setState({
        routeCoordinates: routeCoordinates.concat(positionLatLngs),
        distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
        prevLatLng: newLatLngs
      });
    });
  }

   componentDidMount()
    {
      navigator.geolocation.getCurrentPosition((position) =>{
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);
        here = parseFloat(lat) + ", " + parseFloat(long);

        var waypoints = [];
        var flag = false;

        if (this.state.miles > 0)
      {
        var c1 = //start location
        {
          lat: lat,
          lng: long
        };
        var c2 =
        {
          lat: c1.lat + (.00375 * this.state.miles),
          lng: c1.lng
        };
        var c3 =
        {
          lat: c2.lat,
          lng: c1.lng + (.005 * this.state.miles )
        }

        var c4 =
        {
          lat: c1.lat,
          lng: c2.lng
        }
        waypoints.push(c2);
        waypoints.push(c3);
        waypoints.push(c4);
        flag = true;

        this.getDirections(c1, c1, waypoints, flag);
        this.tracking();
      }

      else
        this.getDirections(here, this.state.dest, waypoints, flag);

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

    }

    async getDirections(startLoc, destinationLoc, waypoints, flag) {
      try {

        //if flag is 1, then waypoints are there. If flag is 0 no way points
        var i = 0;

        let resp;
        if (!flag)
        {
          resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=walking&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
        }

        if (flag)
        {
          resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.lat},${startLoc.lng}&destination=${destinationLoc.lat},${destinationLoc.lng}&waypoints=${waypoints[0].lat},${waypoints[0].lng}|${waypoints[1].lat},${waypoints[1].lng}|${waypoints[2].lat},${waypoints[2].lng}&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);

        }
          let respJson = await resp.json();
          var gencoords1 = [];
          var directions = [];
          var count = 1;
          respJson.routes[0].legs.forEach(function(j)
          {
            j.steps.forEach(function(i)
            {
              var dist = i.distance.text;
              var html = i.html_instructions;
              var endloc = {};
              endloc.lat = i.end_location.lat;
              endloc.lng = i.end_location.lng
              var nohtml = html.replace(/b/g, "");
              nohtml = nohtml.replace(/</g, "");
              nohtml = nohtml.replace(/>/g, "");
              nohtml = nohtml.replace(/\//g, "");

              if (count == 1)
              {
                var stloc = [];
                stloc.lat = i.start_location.lat;
                stloc.lng = i.start_location.lng;
                gencoords1.push(stloc);
              }

              var dir = count + ": " + "In " + dist+ " " + nohtml;
              directions.push(dir);
              gencoords1.push(endloc);
              count++;
            });
          });
          this.setState({directions: directions});
          this.setState({gencoords: gencoords1});
          --count;
          this.setState({dirCount: count});
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
      navigator.geolocation.clearWatch(this.watchID2);
    }

    calcDistance(newLatLng) {
      const { prevLatLng } = this.state;
      return (haversine(prevLatLng, newLatLng) || 0);
    }


    testDirections()
    {
       //to check directions and update marker
    //console.warn("testDiretions");
    var i = 0;
    //Tts.speak("Starting path");

      this.toggle();
      //alert(JSON.stringify(this.state.directions[2]));

    //need to add all the coordinates into an array to test.
    //console.warn("count: " + this.state.dirCount);
    //if (i < this.state.dirCount)
    //  console.warn("true");
  /*   while (i < this.state.dirCount)
    {
      var string = this.state.directions[i].toString();

      setTimeout(function(){
        Tts.speak(string);
      }, 200);
      console.warn("hi");
      //setInterval(function() {
      var lat;
      var long;
      navigator.geolocation.getCurrentPosition((position) =>{
        lat = parseFloat(position.coords.latitude);
        long = parseFloat(position.coords.longitude);
        console.warn("long: "+ long+ " latitude: " + lat + "\n");
      });


        //consider adding precision here
        if (long == this.state.gencoords[i].lng && lat == this.state.gencoords[i].lat)
        {
          //@ the right location
          Tts.speak(this.state.directions[i]);
          console.warn(i);
          i++;
        }
    //}, 10);
    i++;

  }
   Tts.stop(); */
   //this.toggle();
    }

    checkDirections()
    {
      //to check directions and update marker
    console.warn("checkDiretions");
    var i = 0;
    Tts.speak("Starting path");
    //console.warn("count: " + this.state.dirCount);
    /* while (i < this.state.dirCount)
    {
      setInterval(function() {
      navigator.geolocation.getCurrentPosition((position) =>{
        var lat = parseFloat(position.coords.latitude);
        var long = parseFloat(position.coords.longitude);
        var curRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LD,
          longitudeDelta: LGD
        }
        this.setState({initialPosition: curRegion});
        this.setState({markerPosition: curRegion});
        console.warn("long: "+ curRegion.longitude+ " latitude: " + curRegion.latitude + "\n");
        if (curRegion.longitude == this.state.gencoords[i].lng && curRegion.latitude == this.state.gencoords[i].lat)
        {
          //@ the right location
          Tts.speak(this.state.directions[i]);
          console.warn(i);
          i++;
        }
      });
    }, 100);

   } */

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
      title='Start'
      onPress={() => this.testDirections()}
    />
            <Button
      backgroundColor='#03A9F4'
      title='Directions'
      onPress={() => this.setModalVis(true)}
    />
    {this.onStart()}
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarGroup}>
            <Text style={styles.bottomBarHeader}>Time Elapsed</Text>
            <Clock style={styles.bottomBarContent}/>
            <Text style={styles.bottomBarHeader}>Distance Traveled</Text>
            <Text style={styles.bottomBarContent}>{parseFloat(this.state.distanceTravelled).toFixed(2)*.621} miles</Text>
          </View>
        </View>
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
  },
  bottomBar: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: width,
    padding: 20,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  bottomBarGroup: {
    flex: 1
  },
  bottomBarHeader: {
    color: '#fff',
    fontWeight: "400",
    textAlign: 'center'
  },
  bottomBarContent: {
    color: '#fff',
    fontWeight: "700",
    fontSize: 18,
    //marginTop: 10,
    color: '#19B5FE',
    //justifyContent: 'center',
    textAlign: 'center'
  },
});

export default Gmaps;
