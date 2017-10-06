import React, { Component } from 'react';
import { createRootNavigator } from './router';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }
/*
  componentWillMount() {
    this.setState({ signedIn: false, checkedSignIn: false }))
  }*/

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      //return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}
