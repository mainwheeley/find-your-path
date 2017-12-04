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
class MSetting extends Component {
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
    this.state = {
      miles: 0,
      dest: "Chicago, IL",
      index: 0,
      park: false,
      trail: false,
      beach: false,
    }
    this.type = ["Walk", "Run", "Bike"];
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
    <Text>Weather:</Text>
    <TextInput
      keyboardType='default'
      placeholder='ZIP Code'
      onChangeText={(dest) => this.setState({zip})}
      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType='next'
      style={styles.input}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Save Route'
      onPress={() => navigate('SaveRoute')}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Create Route'
      onPress={() => navigate('Maps')}
    />
    <Button
      backgroundColor='#03A9F4'
      title='Jump to Map'
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

 export default MSetting;
