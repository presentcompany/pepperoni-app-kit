import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import CalculatorVerificationContainer from '../calculator-verification/CalculatorVerificationContainer';
import Dimensions from 'Dimensions';


const CalculatorView = React.createClass({

  propTypes: {
    calculator: PropTypes.number.isRequired
  },

  _updateValue(add) {
    this.props.dispatch({
      type: 'CalculatorState/UPDATE_VALUE',
      payload: add
    });
  },

  _resetValue() {
    this.props.dispatch({
      type: 'CalculatorState/RESET_VALUE'
    });
  },

  render() {
    return (
      <View style={styles.container} ref='container'>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationContainer  />
        </View>
        <View style={styles.taxContainer}>
          <Text style={styles.text}>What is your annual</Text>
          <Text style={styles.text}>income before tax?</Text>
          <View style={[styles.income, styles.margin]}>
            <Text style={styles.text}>${this.props.calculator}</Text>
          </View>
        </View>
        <View style={styles.calcContainer}>
          <View style={styles.rowContainer}>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(1)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>1</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(2)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>2</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(3)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>3</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(4)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>4</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(5)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>5</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(6)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>6</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(7)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>7</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(8)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>8</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(9)}>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>9</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._updateValue(0)}>
              <View style={[styles.zeroButton, styles.margin]}>
                <Text style={[styles.buttonText]}>0</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.headerHomeButton} underlayColor='rgba(0,0,0,0)' onPress={() => this._resetValue()}>
              <View style={[styles.cancelButton, styles.margin]}>
                <Text style={[styles.buttonText]}>C</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  headerHomeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginLeft: 3,
    marginRight: 3,
    marginTop: 9,
  },
  button: {
    flex: 1,
    height: Dimensions.get('window').height/9.5,
    width: Dimensions.get('window').width/4,
    backgroundColor: '#76CA44',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  income: {
    flex: 1,
    height: Dimensions.get('window').height/9.5,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#1989B2',
    paddingRight: 13,
    marginTop: 9,
    justifyContent: 'center',

  },
  zeroButton: {
    flex: 2,
    height: Dimensions.get('window').height/9.5,
    width: Dimensions.get('window').width/2 + 6,
    backgroundColor: '#76CA44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    height: Dimensions.get('window').height/9.5,
    width: Dimensions.get('window').width/4,
    backgroundColor: '#D7453B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  verficationContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  calcContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 74,
    paddingBottom: 44
  },
  taxContainer: {
    width: Dimensions.get('window').width,
    paddingTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalculatorView;
