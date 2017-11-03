import React from 'react';

import {Text,View,TouchableOpacity, StyleSheet} from 'react-native';

export default class App extends React.Component {

constructor(){
    super()
    this.state = {
        viewSection :false
    }
}

renderBottomComponent(){
    if(this.state.viewSection) {
        return (
            <View>
                <Text>Hi!</Text>
            </View>
        )
    }
}

buttonPress=()=>{
    this.setState({viewSection:true})
}

render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.buttonPress}>
                <Text> Click Me!</Text>
            </TouchableOpacity>
            {this.renderBottomComponent()}
        </View>
         );
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
