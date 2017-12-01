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
          <Text style={styles.item}><Text style={styles.itemTitle}>Name: </Text>{item.name} <Text style={styles.itemTitle}>Distance: </Text>{item.totmiles}</Text>
          <Text style={styles.item}><Text style={styles.itemTitle}>Workout Type: </Text>{item.worktype}</Text>
          <Text style={styles.item}><Text style={styles.itemTitle}>Date: </Text>{item.created}</Text>
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
  	fontSize: 14,
    padding: 10,
  	borderBottomColor: '#000',
  	fontWeight: 'bold',
  },
  item: {
  	fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
  	borderBottomColor: '#000',
  }
});

const routes = [
  {
    name: 'PMU Run',
    startpoint: '610 Purdue Mall',
    totmiles: '5',
    uname: 'john_appleseed@yahoo.com',
    worktype: 'Run',
    park_flag: 0,
    trail_flag: 0,
    beach_flag: 1,
    notes: 'fun stuff',
    created: '2017-12-01 04:29:21'
  },
  {
    name: 'PMU Run',
    startpoint: '610 Purdue Mall',
    totmiles: '5',
    uname: 'john_appleseed@yahoo.com',
    worktype: 'Run',
    park_flag: 0,
    trail_flag: 0,
    beach_flag: 1,
    notes: 'fun stuff',
    created: '2017-12-01 04:29:21'
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
