import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Button,
} from 'react-native';
import {listWorkouts} from './WalkData';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class PastWalk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: '',
    }
  }

  componentDidMount() {
    var query = "SELECT * FROM route_table WHERE worktype=\"Walk\"";
    query = encodeURI(query);
    var url = 'http://localhost:3000/query'+'?query='+query;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({route: data});
      console.log(this.state.route);
      //this.forceUpdate();
    })
    .catch((error) => {
      console.warn(error);
    });
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
  <View style={styles.mainContainer}>
    <FlatList
    	data={this.state.route}
    	ItemSeparatorComponent={this.workoutSeparator}
      keyExtractor={(item,index)=> index}
    	renderItem={({ item }) =>
  	    <View>
    	    <Text style={styles.item}><Text style={styles.itemTitle}>Starting point: </Text>{item.startpoint}</Text>
    	    <Text style={styles.item}><Text style={styles.itemTitle}>Total miles: </Text>{item.totmiles}</Text>
  	    </View>
	    }
    />
  </View>);
}

}

const styles = StyleSheet.create({
    title: {
	padding: 10,
	fontSize: 20,
	height: 44,
	borderBottomColor: '#000',
	fontWeight: 'bold',
    },

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
