import React, {PropTypes, Component} from 'react';
import {
  Modal, 
  Text,
  Image,
  Navigator,
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

const MainView = React.createClass({
  
  propTypes: {
    navigator: PropTypes.object.isRequired,
  },

  _onPressButton() {
      console.log("Borrow tapped");
  },

  _onPressButtonTwo() {
      console.log("Repayments tapped");
  },

  _onPressButtonThree() {
      console.log("Stamp duty tapped");
  },

  _navigate(page){
    console.log(this.props);
    this.props.navigator.push({
      name: page,
    });
  },

  render() {
    return (
      <View style={styles.mainBackground}>
        <HeaderContainer navigator={this.props.navigator}/>
        <BorderBoxContainer />
     </View>
    );
  }
});

export default MainView;
