import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import AppRouter from '../AppRouter';
import styles from '../../styles.js';

class CalculatorSelectorView extends Component {
  
  _onPressButton() {
      console.log("Borrow tapped");
  }

  _onPressButtonTwo() {
      console.log("Repayments tapped");
  }

  _onPressButtonThree() {
      console.log("Stamp duty tapped");
  }

  render() {
    return (
      <View>
        <View style={[styles.imageContainer, styles.imageContainerFirst]}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <Image
              style={styles.mainButton}
              source={require('../../images/borrow-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>How much can I borrow?</Text>
        </View>
        <View style={styles.imageContainer}> 
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonTwo}>
            <Image
              style={styles.mainButton}
              source={require('../../images/repayments-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>What are my repayments?</Text>
        </View>
        <View style={[styles.imageContainer, styles.imageContainerLast]}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonThree}>
            <Image
              style={styles.mainButton}
              source={require('../../images/stamp-duty-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>What is my stamp duty?</Text>
        </View>
      </View>
    );
  }
}

export default CalculatorSelectorView;
