import React from 'react';
import { Component, View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

export default ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={routes}
      ItemSeparatorComponent={routesSeparator}
      keyExtractor={(item,index)=> index}
      renderItem={({item}) =>
        <View>
          <Text style={styles.item}><Text style={styles.itemTitle}>Name: </Text>{item.name}</Text>
    	    <Text style={styles.item}><Text style={styles.itemTitle}>Distance: </Text>{item.distance}</Text>
        </View>
      }
      />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});

const routes = [
  {
    name: 'Silver Loop',
    distance: '3 miles',
  },
  {
    name: 'Gold Loop',
    distance: '7 miles',
  },
  {
    name: 'Bronze Loop',
    distance: '5 miles',
  },
  {
    name: 'McD Run',
    distance: '2.5 miles',
  },
];

const routesSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#000'
      }}
    />
  );
}
