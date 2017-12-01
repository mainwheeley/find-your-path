import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  TextInput
} from 'react-native';
import Prompt from 'react-native-prompt';
import api from './utilities/api.js';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.url= "http://api.openweathermap.org/data/2.5/weather?q="
    this.id = "&APPID=1463a41ff3a66b079bfefd971d6f4084"
    this.finalURL = "temp"
    this.cityName = ""
    this.state = {
      weather: [],
      weatherTemp: '',
      weatherType: '',
      tempName: '',
      flag: 0,
    }
  }

  changeFlag = () => {
    this.setState({
      flag: 1
    });
  }

  callAPI()  {
    this.finalURL = this.url + this.cityName + this.id
    fetch(this.finalURL).then((res) => res.json()).then((res) =>{
      this.setState({
        weather: res.weather,
        weatherTemp: res.main.temp,
        weatherType: res.weather[0].description
      })
    });
  }

/*
  componentWillMount(){
    api.getWeathers().then((res) => {
      this.setState({
        weather: res.weather,
        weatherTemp: res.main.temp,
        weatherType: res.weather[0].description
      })
    });
  }
  */


  _handlePress(){
    Alert.alert("Hello")
  }

  _onPressWeatherButton(){
      Alert.alert("Test");
  };

  render() {
    this.cityName = this.state.tempName;
    this.callAPI();

    if(this.state.flag == 1){
      console.log("Weather Temperature: ", this.state.weatherTemp);
      console.log("Weather Type: ", this.state.weatherType);
    }

    return(
      <View style={styles.container}>

        <TextInput
          style={{height: 40}}
          placeholder="Enter City Name"
          onChangeText={
            (tempName) => this.setState({tempName})
          }
        />

        <Text>
          Temperature in Celsius: {Math.round(this.state.weatherTemp - 273)}{"\n"}
          Temperature in Fahrenheit: {Math.round((this.state.weatherTemp - 273) * 9 / 5 + 32)} {"\n"}
          Temperature Description: {this.state.weatherType}{"\n"}
          City Name: {this.cityName}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.changeFlag}
            title="Submit"
            color="#841584"
          />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 20,
    bottom: 0,
  }
})

AppRegistry.registerComponent('AwesomeProject', () => Weather);
