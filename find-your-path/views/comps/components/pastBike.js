import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    Button,
} from 'react-native';
import {listWorkouts} from './BikeData';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class PastBike extends React.Component {

getData(token) {
    fetch('https://graph.facebook.com/v2.8/me?fields=email,name,friends&access_token=' + token)
    //fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
    //fetch('https://graph.facebook.com/v2.5/me?access_token=' + token +'&fields=email,name,friends')
    .then((response) => response.json())
    .then((json) => {
      // Some user object has been set up somewhere, build that user here
      //alert("here2");
      //user.avatar = setAvatar(json.id)
      alert(JSON.stringify(json));
      
      /*$.ajax({
        url: 'http://localhost:3000/fbdata',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(user),
        processData: false,
        success: function( data, textStatus, jQxhr ){
            console.warn(JSON.stringify(data));
            console.warn("success!");
        },
        error: function( jqXhr, textStatus, errorThrown ){
          console.warn("error ajax");  
          console.warn( errorThrown );
        }
    }); */

    fetch('http://10.0.0.31:3000/fbdata', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'name' : json.name, 
        'id' : json.id,
        'email' : json.email,
        'loading' : false,
        'loggedIn' : true
      })
    }).then((response) => response.json())
     .then((responseText) => {
      console.log(responseText);
      console.warn("here4");

    })
    .catch((error) => {
      console.warn(error);
      console.warn("here5");
    }); 
    
    
    })
    .catch(() => {
      reject('ERROR GETTING DATA FROM FACEBOOK')
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
  <View style={styles.mainContainer}>
    <FlatList
	data={listWorkouts}
	ItemSeparatorComponent={this.workoutSeparator}
	renderItem={({ item }) => 
	    <View>
	    <Text style={styles.item}><Text style={styles.itemTitle}>Starting point: </Text>{item.startp}</Text>
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
