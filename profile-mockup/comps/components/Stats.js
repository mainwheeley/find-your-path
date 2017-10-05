import React from 'react';
import { 
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

export default class Stats extends React.Component {
  render() {
    return (

	<ScrollView>
	    <View style={styles.photogrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} source={require('../imgs/run.png')} />
		</View>
	    </View>
	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    photoGrid: {
	flexDirection: 'row',
	flexWrap: 'wrap',
    },
    photoWrap: {
	margin: 2,
	height: 75,
	width: 75,
	//width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
	flex: 1,
	width: 70,
	height: 70,
//	alignItems: 'center',
//	alignSelf: 'stretch',
    },
});

