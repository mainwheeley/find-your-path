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
	<View>
	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="contain" source={require('../imgs/run.png')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Average pace: </Text>
		</View>
	    </View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.lineSeparator}></View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="stretch" source={require('../imgs/road.jpg')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Total distance: </Text>
		</View>
	    </View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.lineSeparator}></View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="contain" source={require('../imgs/fire.jpg')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Total calories burned: </Text>
		</View>
	    </View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.lineSeparator}></View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="contain" source={require('../imgs/time.png')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Total time run: </Text>
		</View>
	    </View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.lineSeparator}></View>
	</View>

	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="contain" source={require('../imgs/star.png')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Favorite route: </Text>
		</View>
	    </View>
	</View>

	</View>
	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    lineSeparator: {
	backgroundColor: '#000',
	height: 1,
	width: (Dimensions.get('window').width - 25),
	alignSelf: 'center',
    },
    boxTest: {
	backgroundColor: '#e3aa1a',
    },
    statsList: {
	fontSize: 20,
	fontWeight: 'bold',
	textAlignVertical: 'center',
    },
    statsGrid: {
	flex: 1,
	flexDirection: 'row',
	flexWrap: 'wrap',
    },
    statsRow: {
	flex: 1,
	flexDirection: 'column',
	flexWrap: 'wrap',
    },
    photoWrap: {
	margin: 10,
	height: (Dimensions.get('window').width / 5),
	width: (Dimensions.get('window').width / 5),
	//width: 75,
    },
    textWrap: {
	alignItems: 'center',
	justifyContent: 'center',
    },
    photo: {
	flex: 1,
	height: (Dimensions.get('window').width / 5) - 25,
	width: (Dimensions.get('window').width / 5) - 25,
	alignSelf: 'stretch',
//	alignItems: 'center',
//	alignSelf: 'stretch',
    },
});

