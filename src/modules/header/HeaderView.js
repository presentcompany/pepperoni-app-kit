import React, {PropTypes, Component} from 'react';
import {
  Image,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import AppRouter from '../AppRouter';
import styles from '../../styles.js';

class HeaderView extends Component {
  _onPressButton() {
      console.log("Home tapped");
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flexContainer}>
          <Image 
              style={styles.headerLogo}
              source={require('../../images/oxygen_logo.png')}
          />
          <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <Image 
                source={require('../../images/home-button.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default HeaderView;
