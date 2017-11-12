import React from 'react';
import { StyleSheet, Dimensions, Text, View, Button, Alert, FlatList } from 'react-native';

export default class Bar extends React.Component {
   render() {
    return (

	<View style={styles.bar}>

	    <View style={[styles.barItem, styles.barseparator]}>
		<Text style={styles.barTop} onPress={() => this.props.navigation.navigate("FavoriteRoutes")}>Favorite Workouts</Text>
		<Text style={styles.barBottom}></Text>
	    </View>

	    <View style={[styles.barItem, styles.barseparator]}>
		<Text style={styles.barTop}>10</Text>
		<Text style={styles.barBottom}>Following</Text>
	    </View>

	</View>

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
