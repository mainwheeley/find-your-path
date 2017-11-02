import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Workouts extends React.Component {

constructor(props) {
super(props)
this.state = {
  list: []
};
}

getList = () => {
const li = [
  { key: "image1", imgLink: "imagelink" },
  { key: "image2", imgLink: "imagelink" },
  { key: "image3", imgLink: "imagelink" },
  { key: "image4", imgLink: "imagelink" },
]

this.setState({
  list: li
})
}

componentWillMount() {
this.getList()
}

render() {
return (
  <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
    <FlatList
      data={this.state.list}
      renderItem={({ item }) => <Text>{item.key}</Text>}
    />
  </View>);
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
