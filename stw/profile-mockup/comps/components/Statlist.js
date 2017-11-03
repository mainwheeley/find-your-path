import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native';

export default class App extends React.Component {
    render() {
    return (
    <View style = {styles.container}>
	<View style={styles.container}> 

	    <Header />

	</View>

	<View style={styles.container}>	
	    <FlatList
		data={[{key: 'Total running time: '}, {key: 'Total miles run'}]}
  	    	renderItem={({item}) => <Text>{item.key}</Text>}
	    />
	</View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
	flex: 1,
	fontSize: 14,
	backgroundColor: '#fff',
    }
});

