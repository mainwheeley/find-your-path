import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class TabBar extends Component {
  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          seleted={this.state.selectedTab === 'welcome'}
          icon={{systemIcon="featured"}}
          onPress={() => {
            this.setState({
              selectedTab: 'welcome',
            });
          }}>
          <Welcome/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          seleted={this.state.selectedTab == 'more'}
          icon={{systemIcon="contacts"}}
          onPress={() => {
            this.setState({
              selectedTab: 'more',
            });
          }}>
          <More/>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
