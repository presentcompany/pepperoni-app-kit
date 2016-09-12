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
  }
})

class CalculatorLoadView extends Component {

  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>I need a loan to...</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Buy my first home</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Buy my next home</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Refinance an</Text>
          <Text style={styles.text}>existing loan</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Buy an investment</Text>
          <Text style={styles.text}>property</Text>
        </View>
      </View>
    );
  }
}

export default CalculatorLoadView;
