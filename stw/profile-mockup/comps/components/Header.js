import React from 'react';
import { 
    StyleSheet,
    TextInput,
    Text,
    View,
    Button,
    Alert,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
	super(props);
	this.state = {text: 'Johnny Appleseed'};
    }

    render() {
    return (
      
	<View style={styles.mainHead}>
	    <Image style={styles.headerBG} source={require('../imgs/bgproftiga.jpg')}>

	        <View style={styles.header}>
	    	<View style={styles.profPicWrap}>
	    	    <Image style={styles.profpic} source={require('../imgs/profpic.jpg')} /> 
	    	</View>
		<View style={styles.nameChange}>
		    <TextInput
			style={{height: 20, borderColor: 'gray', borderWidth: 1, width: Dimensions.get('window').width / 2, textAlign: 'center',  }}
			onChangeText={(text) => this.setState({text})}
			value={this.state.text}
		    />
		</View>
	        </View>

	    </Image>
	</View>
	
	    //	<Text style={styles.name}> Johnny Appleseed </Text>
    );
  }
}

const styles = StyleSheet.create({
    nameChange: {
	alignItems: 'center',
	justifyContent: 'center',
    },
    mainHead: {
	height: (Dimensions.get('window').height / 4),
	alignSelf: 'stretch',
    },
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
	width: (Dimensions.get('window').width / 4),
	height: (Dimensions.get('window').width / 4),
//	width: 180,
//	height: 180,
	borderRadius: 100,
	borderColor: 'rgba(0,0,0, 0.4)',
	borderWidth: 16,
    },
    profpic: {
	flex: 1,
	width: null,
	alignSelf: 'stretch',
	borderRadius: 25,
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
