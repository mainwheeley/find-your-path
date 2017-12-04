import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, Alert, FlatList, TextInput } from 'react-native';

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
   render() {
    return (
      <TextInput
      style={{height: Dimensions.get('window').height / 10, borderColor: '#fff', borderTopWidth: 4, flexDirection: 'row', textAlign: 'center', backgroundColor: '#8BC34A',  }}
      placeholder="Enter workout goal here!"
      placeholderTextColor="red"
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
    bar: {
	borderColor: '#fff',
	borderTopWidth: 4,
	height: Dimensions.get('window').height / 10,
	backgroundColor: '#8BC34A',
	flexDirection: 'row',
    },
    barSeparator: {
	borderRightWidth: 4
    },
    barTop: {
	color: '#fff',
	fontSize: 16,
	fontWeight: 'bold',
	fontStyle: 'italic',
    },
    barItem: {
	flex: 1,
	padding: 18,
	alignItems: 'center',
    },
    barBottom: {
	color: '#000',
	fontSize: 14,
	fontWeight: 'bold',
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
