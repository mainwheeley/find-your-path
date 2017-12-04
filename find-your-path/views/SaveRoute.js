import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ButtonGroup, CheckBox } from 'react-native-elements';


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
  }

  updateIndex(index) {
    this.setState({index});
  }

  save() {
    
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
          buttons={["Walk", "Run", "Bike"]}
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
            goBack();
            this.save();
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
