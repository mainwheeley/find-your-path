import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native';

import Header from './comps/components/Header';

export default class App extends React.Component {
    render() {
    return (
	<View style={styles.container}> 

	    <Header />

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

//var test = React.createClass
