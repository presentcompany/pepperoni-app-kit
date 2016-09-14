import React, {PropTypes, Component} from 'react';
import {
  Image,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import * as PageState from '../page/PageState';
import AppRouter from '../AppRouter';
import styles from '../../styles.js';

const HeaderView = React.createClass({
  propTypes: {
    page: PropTypes.number.isRequired
  },

  _onPressButton(page) {
    this.props.dispatch(PageState.change({
      page: page
    }));
  },

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flexContainer}>
          <Image 
              style={styles.headerLogo}
              source={require('../../images/oxygen_logo.png')}
          />
          <TouchableHighlight 
            style={styles.headerHomeButton} 
            underlayColor='rgba(0,0,0,0)' 
            onPress={()=>this._onPressButton(0)}
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
