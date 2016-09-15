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

import initstyles from '../../../styles.js';
import PageControl from'react-native-page-control';

import HeaderContainer from '../../header/HeaderContainer';
import BorderBoxContainer from '../../borderbox/BorderBoxContainer';
import CalculatorSelectorContainer from '../calculator-selector/CalculatorSelectorContainer';

const CalculatorsView = React.createClass({
  
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
      <View style={initstyles.mainBackground}>
        <HeaderContainer navigator={this.props.navigator}/>
        <View style={[initstyles.mainBorder, styles.container]}>
          <View>
            <CalculatorSelectorContainer />
          </View>
       </View>
     </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide4: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide5: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default CalculatorsView;
