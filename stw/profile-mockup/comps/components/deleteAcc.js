import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native';

export default class deleteAcc extends React.Component {
    deletePrompt() {
	Alert.alert(
	    'Delete Account',
	    'Are you sure you want to delete your account?',
	    [
		{text: 'Delete', onPress: () => console.log('User delete')},
		{text: 'No', onPress: () => console.log('No delete')},
	    ],
	);
    }

  render() {
    return (
      <View style={styles.container}>
	<Button
	    onPress={this.deletePrompt}
	    title="Delete Account"
	    color="red"
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

