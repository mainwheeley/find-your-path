import React from 'react';
import { 
    StyleSheet,
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

export default ([navigation}) => {
    constructor(props) {
	super(props);
    	this.state = { text: 'Useless Placeholder' };
    }

    itemSeparator = () => (
	<View
	    style={{
		backgroundColor: '#000',
		height: 2,
	    }}
	/>
    );

    render() {
    return (
 //   <View style = {styles.container}>
	<View style={styles.container}> 

	    <Header />
	    <Bar />
	    <Stats />

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
