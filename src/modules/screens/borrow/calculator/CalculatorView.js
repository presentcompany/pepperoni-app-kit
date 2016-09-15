import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import CalculatorVerificationView from '../../calculator-verification/CalculatorVerificationView';

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
      <View>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationView  />
        </View>
        <View>
          <Text style={styles.text}>What is your annual</Text>
          <Text style={styles.text}>income before tax?</Text>
          <View style={[styles.income, styles.margin]}>
            <Text style={styles.text}>${this.props.calculator}</Text>
          </View>
        </View>
        <View>
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
  rowContainer: {
    flexDirection: 'row',
  },
  margin: {
    marginLeft: 3,
    marginRight: 3,
    marginTop: 9,
  },
  button: {
    flex: 1,
    height: 70,
    width: 101,
    backgroundColor: '#76CA44',
    marginLeft: 3,
    marginRight: 3,
    marginTop: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  income: {
    flex: 1,
    height: 70,
    backgroundColor: '#1989B2',
    marginLeft: 3,
    paddingRight: 13,
    marginTop: 9,
    justifyContent: 'center',

  },
  zeroButton: {
    flex: 2,
    height: 70,
    width: 208,
    backgroundColor: '#76CA44',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    height: 70,
    width: 101,
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
    marginTop: 40,
    marginBottom: -40,
  }
});

export default CalculatorView;
