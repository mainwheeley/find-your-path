import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';

var testerhello;


export default class App extends React.Component {
    tester() {
	Alert.alert("TITIT ALDIO PALING KECIL");
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>TITIT ALDIO KECIL</Text>
	<Text>SE SE SE SE SE SE SE SE S ES ES ES ES ES SE SE SE SE SE</Text>
	<Button
	    onPress={this.tester}
	    title="Learn More"
	    color="#841584"
	    accessibilityLabel="Learn more about this purple button"
	/>
	<FlatList
	    data={[{key: 'a'}, {key: 'b'}]}
  	    renderItem={({item}) => <Text>{item.key}</Text>}
	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//var test = React.createClass
