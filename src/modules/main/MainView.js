import React, {PropTypes, Component} from 'react';
import {
  Modal, 
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import PageControl from'react-native-page-control';

import AppRouter from '../AppRouter';
import styles from '../../styles.js';
import HeaderContainer from '../header/HeaderContainer'
import BorderBoxContainer from '../screens/borderbox/BorderBoxContainer'

class MainView extends Component {
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
      <View style={styles.mainBackground}>
        <HeaderContainer />
        <BorderBoxContainer />
     </View>
    );
  }
}

export default MainView;
