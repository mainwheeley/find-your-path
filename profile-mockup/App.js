import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TITIT ALDIO KECIL</Text>
	<Text>SE SE SE SE SE SE SE SE S ES ES ES ES ES SE SE SE SE SE</Text>
	<Button
	    onPress={render()}
	    title="Learn More"
	    color="#841584"
	    accessibilityLabel="Learn more about this purple button"
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
