import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Button,
} from 'react-native';
import {listWorkouts} from './Data';
import recentWorkouts from './recentWorkouts';
import pastWorkouts from './pastWorkouts';

export default class Workouts extends React.Component {

    constructor() {
	super();
    	this.state = { 
	    text: 'Useless Placeholder',
	    viewRecent: true,
	    viewPast: false
	};
    }

    renderRecent() {
	if (this.state.viewRecent) {
	    return (
		<recentWorkouts />
	    )
	}
    }

    renderPast() {
	if (this.state.viewPast) {
	    return (
		<pastWorkouts />
	    )
	}
    }

    setRecentRender=()=> {
	this.setState({
	    viewRecent: true,
	    viewPast: false
	})
    }

    setPastRender=()=> {
	this.setState({
	    viewRecent: false,
	    viewPast: true
	})
    }


workoutSeparator = () => {
    return (
	<View
	    style={{
		height: 1,
		width: Dimensions.get('window').width,
		backgroundColor: "#000",
	    }}
	/>
    );
}

render() {
return (
  <View style={styles.container}>
    <FlatList
	data={listWorkouts}
	ItemSeparatorComponent={this.workoutSeparator}
	renderItem={({ item }) => 
	    <View>
	    <Text style={styles.item}><Text style={styles.itemTitle}>Date: </Text>{item.date}</Text>
	    <Text style={styles.item}><Text style={styles.itemTitle}>Start time: </Text>{item.time}</Text>
	    </View>
	}
    />

    <View style={styles.statsRow}>
        <View style={styles.delButton}>
    	<Button
       	    onPress={this.setPastRender}
       	    title="Delete Account"
       	    color="red"
       	/>
       </View>
    </View>
  </View>);
}

}

const styles = StyleSheet.create({
    delButton: {
	flex: 1,
	height: (Dimensions.get('window').width / 5) - 25,
	alignItems: 'center',
	justifyContent: 'center',
    },
    statsRow: {
	flex: 1,
	flexDirection: 'column',
	flexWrap: 'wrap',
    },
    itemTitle: {
	padding: 10,
	fontSize: 18,
	height: 44,
	borderBottomColor: '#000',
	fontWeight: 'bold',
    },
    item: {
	padding: 10,
	fontSize: 18,
	height: 44,
	borderBottomColor: '#000',
    },
    mainContainer: {
	justifyContent: 'center',
	flex: 1,
	margin: 10
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
      marginTop: 14,
      alignSelf: 'stretch',
  },
});
