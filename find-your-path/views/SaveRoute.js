import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ButtonGroup, CheckBox } from 'react-native-elements';
var moment = require('moment');


export default class SaveRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      index: 0,
      notes: '',
      park: false,
      trail: false,
      beach: false,
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.type = ["Walk", "Run", "Bike"];
  }

  updateIndex(index) {
    this.setState({index});
  }

  save() {
    var entry = new Object();
    entry.name = this.state.name;
    entry.startpoint = '610 Purdue Mall';
    entry.totmiles = 5;
    entry.uname = 'john_appleseed@yahoo.com';
    entry.worktype = this.type[this.state.index];
    entry.park_flag = this.state.park ? 1:0;
    entry.trail_flag = this.state.trail ? 1:0;
    entry.beach_flag = this.state.beach ? 1:0;
    entry.notes = this.state.notes;
    entry.created = moment().format("YYYY-MM-DD HH:mm:ss");
    var query = "INSERT INTO save_routes (name, startpoint, totmiles, uname, worktype, park_flag, trail_flag, beach_flag, notes, created) VALUES (\'" + entry.name + "\', \'" +
      entry.startpoint + "\', " + entry.totmiles + ", \'" + entry.uname + "\', \'" +
      entry.worktype + "\', " + entry.park_flag + ", " + entry.trail_flag + ", " +
      entry.beach_flag + ", \'" + entry.notes + "\', " + "NOW());";
    var json = JSON.stringify({'query': query});

    fetch('http://localhost:3000/query', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: json
    }).then((response) => response.json())
     .then((responseText) => {
      console.log(responseText);
    })
    .catch((error) => {
      console.warn(error);
      console.warn("here5");
    });
  }


  render() {
    const {goBack} = this.props.navigation;
    return (
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.nameText}
          value={this.state.name}
          onChangeText={(name) => this.setState({name})}
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
        <CheckBox
          title='Park'
          onIconPress={() => this.setState({park: !this.state.park})}
          checked={this.state.park}
        />
        <CheckBox
          title='Trail'
          onIconPress={(trail) => this.setState({trail: !this.state.trail})}
          checked={this.state.trail}
        />
        <CheckBox
          title='Beach'
          onIconPress={(beach) => this.setState({beach: !this.state.beach})}
          checked={this.state.beach}
        />
        <Text>Notes:</Text>
        <TextInput
          multiline={true}
          value={this.state.notes}
          style={styles.notesText}
          onChangeText={(notes) => this.setState({notes})}
        />
        <Button
          title='Save Route'
          onPress={() => {
            this.save();
            goBack();
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  nameText: {
    backgroundColor: '#FFFFFF',
    height: 40,
    padding: 10
  },
  notesText: {
    backgroundColor: '#FFFFFF',
    height: 100,
    padding: 10
  }
})
