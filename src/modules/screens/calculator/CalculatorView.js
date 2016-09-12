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
})

class CalculatorView extends Component {

  _onPressButton() {
    console.log("button on the calculator loan was pressed");
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

export default CalculatorView;
