import React, {PropTypes, Component} from 'react';
import {
  Image,
  Navigator,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import * as PageState from '../page/PageState';
import styles from '../../styles.js';

const HeaderView = React.createClass({
  propTypes: {
    page: PropTypes.number.isRequired
  },

  _navigate(page){
    this.props.navigator.popToTop(0);
  },

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flexContainer}>
          <TouchableHighlight 
            onPress={()=>this._navigate('Home')}
            underlayColor='rgba(0,0,0,0)'
          >
            <Image 
                style={styles.headerLogo}
                source={require('../../images/oxygen_logo.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.headerHomeButton} 
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
