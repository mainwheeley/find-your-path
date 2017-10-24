import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native';

export default class buttontest extends React.Component {
    alertMess() {
	Alert.alert("Settings button pressed");
    }

    render() {
    return (
	<View style={styles.container}>
	    <Button
		onPress={this.alertMess}
		title="Settings"
		color="#841584"
	    />
	</View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	backgroundColor: '#000',
    }
});

