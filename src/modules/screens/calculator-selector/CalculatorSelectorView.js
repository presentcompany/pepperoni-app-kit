import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import styles from '../../../styles.js';

const CalculatorSelectorView = React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  },

  _onPressButton() {
    this.props.dispatch(
        {
          type: 'TextState/CHANGE',
          text: 'new text'
        }
      );
  },

  _navigate(page){
    console.log(this.props);
    console.log('inside calc selector');
    this.props.navigator.push({
      name: page,
    });
  },

  _onPressButtonTwo() {
      console.log(this.props);
  },

  _onPressButtonThree() {
      console.log("Stamp duty tapped");
  },

  render() {
    return (
      <View>
        <View style={[styles.imageContainer, styles.imageContainerFirst]}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=>this._navigate('Borrow')}>
            <Image
              style={styles.mainButton}
              source={require('../../../images/borrow-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>How much can I borrow?</Text>
        </View>
        <View style={styles.imageContainer}> 
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonTwo}>
            <Image
              style={styles.mainButton}
              source={require('../../../images/repayments-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>What are my repayments?</Text>
        </View>
        <View style={[styles.imageContainer, styles.imageContainerLast]}>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonThree}>
            <Image
              style={styles.mainButton}
              source={require('../../../images/stamp-duty-button.png')}
            />
          </TouchableHighlight>
          <Text style={styles.mainText}>What is my stamp duty?</Text>
        </View>
      </View>
    );
  }
});

export default CalculatorSelectorView;
