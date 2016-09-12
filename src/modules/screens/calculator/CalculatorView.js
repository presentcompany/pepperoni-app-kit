import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import AppRouter from '../../AppRouter';

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
    marginRight: 3,
    marginTop: 9,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})

class CalculatorView extends Component {

  _onPressButton() {
    console.log("button on the calculator loan was pressed");
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>What is your annual</Text>
          <Text style={styles.text}>income before tax?</Text>
          <View style={[styles.income, styles.margin]}>
            <Text style={styles.text}>$8</Text>
          </View>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>1</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>2</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>3</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>4</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>5</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>6</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>7</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>8</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.button, styles.margin]}>
                <Text style={[styles.buttonText]}>9</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.rowContainer}>
            <TouchableHighlight>
              <View style={[styles.zeroButton, styles.margin]}>
                <Text style={[styles.buttonText]}>0</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={[styles.cancelButton, styles.margin]}>
                <Text style={[styles.buttonText]}>C</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

export default CalculatorView;
