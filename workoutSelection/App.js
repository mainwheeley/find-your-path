import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Walking', value: 'walk' },
  {label: 'Running', value: 'run' },
  {label: 'Bicycle', value: 'bike' },
  {label: 'Other', value: 'etc' },

];

export default class App extends React.Component {
    constructor() {
	super();
	this.state = {
	    value: 'walk'
	};
    }

    logOnChange(valuex) {
	this.setState({value:valuex});
	console.log(valuex);
    }

  render() {
    return (
      <View style={styles.container}>
	<RadioForm
	    radio_props={radio_props}
	    initial={0}
	    onPress={(value) => 
		{this.logOnChange(value)}
	    }
	    buttonColor={'#8BC34A'}
	    formHorizontal={true}
	    labelHorizontal={false}
	/>
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
