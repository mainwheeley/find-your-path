import React, { Component } from 'react';

import { CheckBox, ListItem, Body } from 'native-base';

export default class StayLogged extends Component {
  constructor(props) {
  	super(props);
  	this.state={stayLog: false};
  }

  render() {
    return (
      <ListItem style={{backgroundColor:'#8BC34A'}}>
        <CheckBox
          checked={this.state.stayLog}
          onPress={() => this.setState({
            stayLog: !this.stae.stayLog
          })}
        />
        <Body>
          <Text> Stay logged in</Text>
        </Body>
      </ListItem>
    );
  }

}
