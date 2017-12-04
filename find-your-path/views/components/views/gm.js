import React, { Component } from "react";
import { Modal, AppRegistry, StyleSheet, Text, View, ListView, FlatList, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Button, ButtonGroup } from 'react-native-elements';
import Polyline from '@mapbox/polyline';
import Tts from 'react-native-tts';
import { lang } from "moment";

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
            sf: false
          }

      }

      watchID: ?number = null

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
      //this.getDirections("52.5200, 13.4050", "41.0082, 28.9784");
      /* console.warn(here);
      this.getDirections(here, "Naperville, IL"); */

      //console.warn("hello!");
      //this.getDirections("40.1884979, 29.061018", "41.0082,28.9784");
    }

    async getDirections(startLoc, destinationLoc, waypoints, flag) {
      try {

        //if flag is 1, then waypoints are there. If flag is 0 no way points
        var i = 0;
        /*while (i < 3)
        {
          console.warn("long: "+waypoints[i].lng + " lat: "+ waypoints[i].lat + "\n");
          i++;
        }  */

        let resp;
        if (!flag)
        {
          resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&mode=walking&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
        } 
          //let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.4189553,+-86.9080627&destination=40.4248,+-86.9110&mode=walking&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`); <--works
          //let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.4190019,-86.9080573&destination=40.4190019,-86.9080573&waypoints=Chicago,IL|San Diego,CA&key=%20AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
          //let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=Boston,MA&destination=Concord,MA&waypoints=Charlestown,MA|West Lafayette,IN&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
          //let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.4190019,-86.9080573&destination=Champaign,IL&waypoints=Gary,IN&key=%20AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
          //let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.4189553,+-86.9080627&destination=40.4189553,+-86.9080627&waypoints=Chicago,IL|Naperville, IL|Rockford, IL&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
        if (flag)
        {  
          //console.warn(waypoints);
          //console.warn(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.lat},${startLoc.lng}&destination=${destinationLoc.lat},${destinationLoc.lng}&waypoints=${waypoints[0].lat},${waypoints[0].lng}|${waypoints[1].lat},${waypoints[1].lng}|${waypoints[2].lat},${waypoints[2].lng}&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`)
          resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.lat},${startLoc.lng}&destination=${destinationLoc.lat},${destinationLoc.lng}&waypoints=${waypoints[0].lat},${waypoints[0].lng}|${waypoints[1].lat},${waypoints[1].lng}|${waypoints[2].lat},${waypoints[2].lng}&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
          //resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=40.4190019,-86.9080573&destination=40.4190019,-86.908057&waypoints=40.4490, -86.9079|40.4490, -86.8679|40.4190, -86.8679&key=AIzaSyDLWhkm_ecWkhFRKi6aJDs1Js70BeP1zW0`);
        }  
          let respJson = await resp.json();
          //console.warn("hello2")
          //console.warn(destinationLocation)
          //console.warn(JSON.stringify(respJson.routes[0].legs[0].steps));
          var gencoords1 = [];
          var directions = [];
          var count = 1;
          //console.warn(respJson.routes);
          respJson.routes[0].legs[0].steps.forEach(function(i)
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

    }



    testDirections()
    {
       //to check directions and update marker
    //console.warn("testDiretions");
    var i = 0;
    Tts.speak("Starting path");

      this.toggle();
      //alert(JSON.stringify(this.state.directions[2]));

    //need to add all the coordinates into an array to test.
    //console.warn("count: " + this.state.dirCount);
    if (i < this.state.dirCount)
    //  console.warn("true");
     while (i < this.state.dirCount)
    {
      var string = this.state.directions[i].toString();

      setTimeout(function(){
        Tts.speak(string);
      }, 200);
      /*console.warn("hi");
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
    //}, 10); */
    i++;

  }
   Tts.stop();
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
