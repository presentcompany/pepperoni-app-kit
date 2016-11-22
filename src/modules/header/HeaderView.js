import React, {PropTypes, Component} from 'react';
import {
  Image,
  Navigator,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import * as PageState from '../page/PageState';
import layout from '../../styles/base/_layout.js';

const HeaderView = React.createClass({
  propTypes: {
    page: PropTypes.number.isRequired
  },

  _navigate(page){
    this.props.navigator.popToTop(0);
  },

  render() {
    return (
      <View style={layout.header} >
        <View style={layout.flexContainer}>
          <TouchableHighlight 
            onPress={()=>this._navigate('Home')}
            underlayColor='rgba(0,0,0,0)'
          >
            <Image 
                style={layout.headerLogo}
                source={require('../../images/oxygen_logo.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight 
            style={layout.headerHomeButton} 
            underlayColor='rgba(0,0,0,0)' 
            onPress={()=>this._navigate('Home')}
          >
            <Image 
                source={require('../../images/home-button.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

export default HeaderView;
