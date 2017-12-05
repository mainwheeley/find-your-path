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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import PastData from './pastData';
import PastBike from './pastBike';
import PastWalk from './pastWalk';
import PastRun from './pastRun';

var radio_props = [
    {label: 'All ', value: 0},
    {label: 'Walk ', value: 1},
    {label: 'Run ', value: 2},
    {label: 'Bike ', value: 3},
];

export default class PastWorkouts extends React.Component {
    constructor() {
	super();
    	this.state = { 
	    viewType: 0
	};
    }

    logOnChange(valuex) {
	this.setState({viewType:valuex});
	console.log(this.state.viewType);
    }

    renderType() {
	if (this.state.viewType == 0) {
	    return (
		<PastData />
	    )
	} else if (this.state.viewType == 1) {
	    return (
		<PastWalk />
	    )
	} else if (this.state.viewType == 2) {
	    return (
		<PastRun />
	    )
	} else if (this.state.viewType == 3) {
	    return (
		<PastBike />
	    )
	}
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
    <RadioForm
	radio_props={radio_props}
	onPress={(value) => {this.logOnChange(value)}}
	buttonColor={'#8BC34A'}
	formHorizontal={true}
	labelHorizontal={true}
    />
    {this.renderType()}
  </View>
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
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
      marginTop: 14,
      alignSelf: 'stretch',
  },
});
