import React, {PropTypes, Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import colours from '../../styles/base/_colours.js';
import layout from '../../styles/base/_layout.js';
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

  configureScene(route, routeStack) {
    if(route.name === 'Home') {
      return Navigator.SceneConfigs.FloatFromLeft;
    } else if (route.name === 'Broker' || route.name === 'Borrow' || route.name === 'Calculators') {
      return Navigator.SceneConfigs.PushFromRight;
    } else {
      return Navigator.SceneConfigs.PushFromRight;
    }
  },

  render() {
    return (
      <Navigator
        style={[colours.cBlue, layout.container]}
        initialRoute={{ name: 'Home' }}
        renderScene={ this.renderScene }
        configureScene={ this.configureScene }
      />

    );
  }
});

export default NavigationView;
