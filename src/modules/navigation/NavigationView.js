import React, {PropTypes, Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';
import HomeContainer from '../home/HomeContainer';
import MainContainer from '../main/MainContainer';

const NavigationView = React.createClass({

  renderScene(route, navigator) {
     if(route.name == 'Main') {
       return <MainContainer navigator={navigator} />
     }
     if(route.name == 'Home') {
       return <HomeContainer navigator={navigator} />
     }
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
        renderScene={ this.renderScene } />
    );
  }
});

export default NavigationView;
