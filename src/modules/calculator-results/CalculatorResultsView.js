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
  marginFirstChild: {
    marginTop: 150,
  },
  marginLastChild: {
    marginBottom: 170,
  },
  marginTop: {
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 10,
  },
  valueText: {
    flex:1,
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  blueBox: {
    flex:1,
    minHeight: 56,
    padding: 4,
    backgroundColor: '#1989B2',
  },
  button: {
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
    flex:1,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
  }
})

class CalculatorResultsView extends Component {

  _onPressButton() {
    console.log("button on the calculator loan was pressed");
  }

  render() {
    return (
      <View style={[styles.margins, styles.marginFirstChild]}>
        <View style={styles.margins}>
          <Text style={[styles.text]}>You may be able to</Text>
          <Text style={[styles.text, styles.marginBottom]}>borrow up to...</Text>
        </View>
        <View style={[styles.blueBox, styles.marginBottom]}>
          <Text style={styles.valueText}>$1,125,802</Text>
        </View>
        <View style={[styles.view, styles.marginTop]}>
          <Text style={styles.text}>At 1.5% p.a., your</Text>
          <Text style={styles.text}>monthly repayments</Text>
          <Text style={[styles.text, styles.marginBottom]}>will be...</Text>
        </View>
        <View style={[styles.blueBox]}>
          <Text style={[styles.valueText]}>$3,885</Text>
        </View>
        <View style={[styles.view, styles.marginTop]}>
          <Text style={styles.text}>At 3.0% p.a., your</Text>
          <Text style={styles.text}>monthly repayments</Text>
          <Text style={[styles.text, styles.marginBottom]}>will be...</Text>
        </View>
        <View style={styles.blueBox}>
          <Text style={styles.valueText}>$4,746</Text>
        </View>
        <TouchableHighlight style={[styles.headerHomeButton, styles.marginTop, styles.marginLastChild]} underlayColor='rgba(0,0,0,0)' onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={[styles.text]}>Find a broker</Text>          
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default CalculatorResultsView;
