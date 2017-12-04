import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Button,
} from 'react-native';
import {listWorkouts} from './data.js';
import RecentWorkouts from './recentWorkouts';
import PastWorkouts from './pastWorkouts';

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
		<RecentWorkouts />
	    )
	}
    }

    renderPast() {
	if (this.state.viewPast) {
	    return (
		<PastWorkouts />
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
	var recent=this.state.viewRecent
	var past=this.state.viewPast
	this.setState({
	    viewRecent: !recent,
	    viewPast: !past
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
    <View style={styles.mainContainer}>
	{this.renderRecent()}
    	{this.renderPast()}
    </View>
    <View style={styles.statsRow}>
        <View style={styles.delButton}>
    	<Button
       	    onPress={this.setPastRender}
       	    title="Switch Recent/Past"
       	    color="#8BC34A"
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
	borderColor: '#fff',
	borderTopWidth: 0,
	borderBottomWidth: 0,
	height: Dimensions.get('window').height / 10,
	backgroundColor: '#fff',
	flexDirection: 'row',
	alignItems: 'center',
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
	height: (Dimensions.get('window').height / 4),
	flex: 1,
	margin: 10
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
      marginTop: 14,
      alignSelf: 'stretch',
  },
});
