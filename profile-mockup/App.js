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

export default class App extends React.Component {
    constructor() {
	super();
    	this.state = { 
	    text: 'Useless Placeholder',
	    viewSection: false
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
	if (!this.state.viewSection) {
	    return (
		<Stats />
	    )
	}
    }

    setStatsRender=()=> {
	this.setState({viewSection: true})
    }

    render() {
    return (
 //   <View style = {styles.container}>
	<View style={styles.container}> 

	    <Header />
	    <Bar />
	    <TouchableOpacity onPress={this.setStatsRender}>
		<Text> Render Stats!</Text>
	    </TouchableOpacity>
	    {this.renderStats()}

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
