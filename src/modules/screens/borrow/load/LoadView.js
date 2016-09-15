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

class CalculatorLoadView extends Component {

  _onPressButton() {
    console.log("button on the calculator loan was pressed");
  }

  render() {
    return (
      <View>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationView />
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
}

var styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#76CA44',
    borderRadius: 8,
    minWidth: 315,
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
    marginTop: 40,
  },
  verficationContainer: {
    marginTop: 4,
    marginBottom: -4,
  }
});

export default CalculatorLoadView;
