import React, { Component } from 'react';
import {View, StyleSheet, TextInput, Text } from 'react-native';
import { Button, ButtonGroup, CheckBox } from 'react-native-elements';
/*
constructor () {
  super()
  this.state = {
    selectedIndex: 0
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}*/

//const buttons = ['Walk', 'Run', 'Bike']

var miles;
//export default ({ navigation }) => (
export default class MSetting extends Component {
  /*_toMap (prop1){
     let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: Gmaps,
      title: 'Maps ' + nextIndex,
      passProps: {miles: prop1}
    });
    navigation.navigate('Gmaps');
  }*/

  constructor(props) {
    super(props);
    this.url= "https://api.openweathermap.org/data/2.5/weather?zip=";
    this.id = ",US&APPID=1463a41ff3a66b079bfefd971d6f4084";
    this.finalURL = "";
    this.cityName = "";
    this.finalC = "";
    this.finalF = "";
    this.tempName = '';
    this.weather = [],
    this.weatherTemp = '',
    this.weatherType ='',
    this.state = {
      miles: 0,
      dest: "Chicago, IL",
      index: 0,
      park: false,
      trail: false,
      beach: false,
      weatherText: '',
      zip: ''
    }
    this.type = ["Walk", "Run", "Bike"];
    this.callAPI = this.callAPI.bind(this);
  }


  callAPI()  {
    this.finalURL = this.url + this.state.zip + this.id
    console.log(this.finalURL);
    fetch(this.finalURL, {
      method: 'GET',
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
    })
    .then((res) => res.json())
    .then((res) =>{
        this.weather = res.weather;
        this.weatherTemp = res.main.temp;
        this.weatherType = res.weather[0].description;
        this.finalC = Math.round(this.weatherTemp - 273);
        this.finalF = Math.round((this.weatherTemp - 273) * 9 / 5 +32);
        this.setState({weatherText: this.weatherType + ' ' + this.finalC + 'C ' + this.finalF + 'ºF'});
        console.log(this.weatherType + ' ' + this.finalC + 'C ' + this.finalF + 'ºF');
    })
    .catch((error) => {
      console.warn(error);
    });
  }



  render()
  { var {navigate} = this.props.navigation;
    return(
  <View style={styles.container}>
    <Text>Distance</Text>
    <TextInput
      keyboardType='numeric'
      placeholder='8 miles'
      onChangeText={(miles) => this.setState({miles})}

      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType='next'
      style={styles.input}
    />
    <TextInput
      keyboardType='default'
      placeholder='Chicago, IL'
      onChangeText={(dest) => this.setState({dest})}

      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType='next'
      style={styles.input}
    />
    <Text>Workout Type:</Text>
    <ButtonGroup
      onPress={this.updateIndex}
      selectedBackgroundColor='#007aff'
      selectedIndex={this.state.index}
      buttons={ this.type }
      containerStyle={{height: 30}}
    />
    <Text>Flags:</Text>
    <View style={{flex: 1, flexDirection:'row', alignItems: 'flex-start'}}>
      <CheckBox
        title='Park'
        style={styles.checkbox}
        onIconPress={() => this.setState({park: !this.state.park})}
        checked={this.state.park}
      />
      <CheckBox
        title='Trail'
        style={styles.checkbox}
        onIconPress={(trail) => this.setState({trail: !this.state.trail})}
        checked={this.state.trail}
      />
      <CheckBox
        title='Beach'
        style={styles.checkbox}
        onIconPress={(beach) => this.setState({beach: !this.state.beach})}
        checked={this.state.beach}
      />
    </View>
    <Text>Weather: {this.state.weatherText}</Text>
    <TextInput
      keyboardType='default'
      placeholder='ZIP Code'
      placeholderTextColor="rgba(255,255,255,0.7)"
      onChangeText={(zip) => this.setState({zip})}
      returnKeyType='next'
      style={styles.input}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Enter'
      onPress={() => this.callAPI()}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Save Route'
      onPress={() => navigate('SaveRoute', {miles: this.state.miles, dest: this.state.dest, index: this.state.index, park: this.state.park, trail: this.state.trail, beach: this.state.beach})}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Create Route'
      onPress={() => navigate('Gmaps', {miles: this.state.miles, dest: this.state.dest})}
    />
  </View>
  )}
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'column',
     backgroundColor: '#FFF',
     alignItems: 'center',
     justifyContent: 'space-around'
   },
   input: {
     width: 200,
     height: 40,
     backgroundColor: 'rgba(0,0,0,0.2)',
     marginBottom: 10,
     color: '#FFF',
     paddingHorizontal: 10
   },
   checkbox: {
     flex: 1,
     flexDirection: 'row',
   }
 })
