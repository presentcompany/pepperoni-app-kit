import React, {PropTypes, Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import AppRouter from '../AppRouter';

const NavigationView = React.createClass({

  renderScene(route, navigator) {
    return (
      <View>
        {AppRouter(route, navigator)}
      </View>
    );
  },

  _navigate(){
    this.props.navigator.push({
      name: 'Home',
    })
  },

  render() {
    return (
      <Navigator
        style={{ flex:1 }}
        initialRoute={{ name: 'Home' }}
        renderScene={ this.renderScene } 
      />

    );
  }
});

export default NavigationView;
