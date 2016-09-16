import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import CalculatorVerificationContainer from '../../calculator-verification/CalculatorVerificationContainer';
import Dimensions from 'Dimensions';

const CalculatorLoadView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired
  },

  _onPressButton() {
    console.log("button on the calculator loan was pressed");
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.verficationContainer]}>
          <CalculatorVerificationContainer />
        </View> 
        <View style={styles.questionContainer}>  
          <View>
            <Text style={styles.text}>I need a loan to...</Text>
          </View>
          <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <View style={styles.view}>
              <Text style={styles.text}>Buy my first home</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <View style={styles.view}>
              <Text style={styles.text}>Buy my next home</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <View style={styles.view}>
              <Text style={styles.text}>Refinance an</Text>
              <Text style={styles.text}>existing loan</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
            <View style={styles.view}>
              <Text style={styles.text}>Buy an investment</Text>
              <Text style={styles.text}>property</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  view: {
    backgroundColor: '#76CA44',
    borderRadius: 8,
    width: Dimensions.get('window').width - 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    padding: 14,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
    height: Dimensions.get('window').height - 114,
    marginTop: - 47,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verficationContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    paddingTop: 74,
  }
});

export default CalculatorLoadView;
