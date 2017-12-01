import React from 'react';
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions,
    ScrollView,
    Alert,
} from 'react-native';

export default class Stats extends React.Component {
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

	<ScrollView>
	<View>
	<View style={styles.statsRow}>
	    <View style={styles.statsGrid}>
		<View style={styles.photoWrap}>
		    <Image style={styles.photo} resizeMode="contain" source={require('../imgs/run.png')} />
		</View>
		<View style={styles.textWrap}>
		    <Text style={styles.statsList}>Average pace: 7.5 min/mile</Text>
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
		    <Text style={styles.statsList}>Total distance: 20 mi </Text>
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
		    <Text style={styles.statsList}>Ave. cal burned: 150 cals</Text>
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
		    <Text style={styles.statsList}>Total time run: 12 hrs</Text>
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
        <Text style={styles.statsList}>My Popular Routes</Text>
    </View>
      </View>
  </View>

  <View style={styles.statsRow}>
      <View style={styles.statsGrid}>
    <View style={styles.photoWrap}>
        <Image style={styles.photo} resizeMode="contain" source={require('../imgs/one.jpg')} />
    </View>
    <View style={styles.textWrap}>
        <Text style={styles.statsListRoute}>134 W State St.</Text>
        <Text style={styles.statsListDescription}>Total Distance: 6 mi</Text>
        <Text style={styles.statsListDescription}># of times ran: 4</Text>
        <Text style={styles.statsListDescription}>Specified Dest: Trails</Text>
        <Text style={styles.statsListDescription}>Workout Type: Bike</Text>
    </View>
      </View>
  </View>

  <View style={styles.statsRow}>
      <View style={styles.statsGrid}>
    <View style={styles.photoWrap}>
        <Image style={styles.photo} resizeMode="contain" source={require('../imgs/two.jpg')} />
    </View>
    <View style={styles.textWrap}>
        <Text style={styles.statsListRoute}>610 Purdue Mall</Text>
        <Text style={styles.statsListDescription}>Total Distance: 5 mi</Text>
        <Text style={styles.statsListDescription}># of times ran: 3</Text>
        <Text style={styles.statsListDescription}>Specified Dest: Beach</Text>
        <Text style={styles.statsListDescription}>Workout Type: Run</Text>
    </View>
      </View>
  </View>

  <View style={styles.statsRow}>
      <View style={styles.statsGrid}>
    <View style={styles.photoWrap}>
        <Image style={styles.photo} resizeMode="contain" source={require('../imgs/three.jpg')} />
    </View>
    <View style={styles.textWrap}>
        <Text style={styles.statsListRoute}>230 S Grant St.</Text>
        <Text style={styles.statsListDescription}>Total Distance: 4 mi</Text>
        <Text style={styles.statsListDescription}># of times ran: 2</Text>
        <Text style={styles.statsListDescription}>Specified Dest: Park</Text>
        <Text style={styles.statsListDescription}>Workout Type: Walk</Text>
    </View>
      </View>
  </View>

  <View style={styles.statsRow}>
      <View style={styles.lineSeparator}></View>
  </View>

  <View style={styles.statsRow}>
      <View style={styles.statsGrid}>
    <View style={styles.photoWrap}>
        <Image style={styles.photo} resizeMode="contain" source={require('../imgs/heart.jpg')} />
    </View>
    <View style={styles.textWrap}>
        <Text style={styles.statsList}>Fav. route: 134 W State St.</Text>
    </View>
      </View>
  </View>

	</View>
	</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    delButton: {
	flex: 1,
	height: (Dimensions.get('window').width / 5) - 25,
	alignItems: 'center',
	justifyContent: 'center',
    },
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
    statsListRoute: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlignVertical: 'center',
    },
    statsListDescription: {
      fontSize: 13,
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
