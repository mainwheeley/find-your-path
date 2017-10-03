import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import api from './utilities/api.js';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: [],
      weatherTemp: '',
      weatherType: ''
    }
  }

  componentWillMount(){
    api.getWeathers().then((res) => {
      this.setState({
        weather: res.weather,
        weatherTemp: res.main.temp,
        weatherType: res.weather[0].description
      })
    });
  }

  render() {
    console.log("Weather: ", this.state.weather);
    console.log("Weather Temperature: ", this.state.weatherTemp);
    console.log("Weather Type: ", this.state.weatherType);
    return(
      <View style={styles.container}>
        <Text>
          Temperature in Celsius: {Math.round(this.state.weatherTemp - 273)}{"\n"}
          Temperature in Fahrenheit: {Math.round((this.state.weatherTemp - 273) * 9 / 5 + 32)} {"\n"}
          Temperature Description: {this.state.weatherType}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('AwesomeProject', () => Weather);
