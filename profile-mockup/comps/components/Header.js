import React from 'react';
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native';

export default class Header extends React.Component {
    render() {
    return (
      
	<Image style={styles.headerBG} source={require('../imgs/bgprof.jpg')}>

	    <View style={styles.header}>
		<View style={styles.profPicWrap}>
		    <Image style={styles.profpic} source={require('../imgs/profpic.jpg')} /> 
		</View>

		<Text style={styles.name}> Johnny Appleseed </Text>
	    </View>

	</Image>
	
    );
  }
}

const styles = StyleSheet.create({
    headerBG: {
	flex: 1,
	width: null,
	alignSelf: 'stretch'
    },
    header: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    profPicWrap: {
	width: 180,
	height: 180,
	borderRadius: 100,
	borderColor: 'rgba(0,0,0, 0.4)',
	borderWidth: 16,
    },
    profpic: {
	flex: 1,
	width: null,
	alignSelf: 'stretch',
	borderRadius: 100,
	borderColor: '#fff',
	borderWidth: 4
    },
    name: {
	marginTop: 20,
	fontSize: 16,
	color: '#fff',
	fontWeight: 'bold'
    },
    pos: {
	fontSize: 14,
	color: '#0394c0',
	fontWeight: '300',
	fontStyle: 'italic'
    }
});

//var test = React.createClass
