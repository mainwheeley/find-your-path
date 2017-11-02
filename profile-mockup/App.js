import React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    FlatList,
    Image,
    ScrollView
} from 'react-native';

import Header from './comps/components/Header';
import buttontest from './comps/components/buttontest';
import Bar from './comps/components/Bar';
import Stats from './comps/components/Stats';
import deleteAcc from './comps/components/deleteAcc';
import Workouts from './comps/components/Workouts';

export default class App extends React.Component {
    constructor() {
	super();
    	this.state = { 
	    text: 'Useless Placeholder',
	    viewStats: false,
	    viewWorkouts: false
	};
    }

    itemSeparator = () => (
	<View
	    style={{
		backgroundColor: '#000',
		height: 2,
	    }}
	/>
    );

    renderStats() {
	if (this.state.viewStats) {
	    return (
		<Stats />
	    )
	}
    }

    renderWorkouts() {
	if (this.state.viewWorkouts) {
	    return (
		<Workouts />
	    )
	}
    }

    setStatsRender=()=> {
	this.setState({
	    viewStats: true,
	    viewWorkouts: false
	})
    }

    setWorkoutsRender=()=> {
	this.setState({
	    viewStats: false,
	    viewWorkouts: true
	})
    }

    render() {
    return (
 //   <View style = {styles.container}>
	<View style={styles.container}> 

	    <Header />
	    <Bar />
	    <View style={styles.buttonBar}>

	    <TouchableOpacity 
		onPress={this.setStatsRender}
		style={styles.buttonBorder} >
	    	        <Image
	    	            style={styles.buttons}
	    	            source={require('./comps/imgs/stats.png')}
	    	        />
	    </TouchableOpacity>

	    <TouchableOpacity 
		onPress={this.setWorkoutsRender}
		style={styles.buttonBorder} >
	    	        <Image
	    	            style={styles.buttons}
	    	            source={require('./comps/imgs/workout.png')}
	    	        />
	    </TouchableOpacity>

	    </View>
	    {this.renderStats()}
	    {this.renderWorkouts()}

	</View>
//    </View>

//	<View style={styles.container}>	
//	    <FlatList
//		data={[{key: 'Total running time: '}, {key: 'Total miles run'}]}
//  	    	renderItem={({item}) => <Text style={styles.statStyle}>{item.key}</Text>}
//		ItemSeparatorComponent={this.itemSeparator}
//	    />
//	</View>
    );
  }
}

const styles = StyleSheet.create({
    buttonBar: {
	borderColor: '#fff',
	borderWidth: 5,
	borderBottomWidth: 0,
	height: Dimensions.get('window').height / 10,
	backgroundColor: '#fff',
	flexDirection: 'row',
	alignItems: 'center',
    },
    buttons: {
	height: Dimensions.get('window').height / 17,
	width: Dimensions.get('window').height / 17,
    },
    buttonBorder: {
	flex: 1,
	height: Dimensions.get('window').height / 15,
	width: Dimensions.get('window').height / 15,
	borderWidth: 1,
	borderColor: '#F44336',
	borderRadius: 10,
	borderRightWidth: 5,
	borderLeftWidth: 5,
	alignItems: 'center',
    },
    statStyle: {
	marginTop: 20,
	marginBottom: 20,
	fontSize: 16,
	color: '#000',
	fontWeight: 'bold'
    },
    container: {
	flex: 1,
	backgroundColor: '#fff',
    }
});

//var test = React.createClass
