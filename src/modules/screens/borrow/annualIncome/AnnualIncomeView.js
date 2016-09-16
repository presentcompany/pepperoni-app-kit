import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TextInput,
  View, 
  StyleSheet
} from 'react-native';

import CalculatorVerificationContainer from '../../calculator-verification/CalculatorVerificationContainer';
import * as BorrowState from '../main/BorrowState';
import * as PageState from '../../../page/PageState';
import Dimensions from 'Dimensions'; 

const AnnualIncomeView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired,
    borrow: PropTypes.object.isRequired,
  },

  _updateAnnualIncome(income) {
    let borrow = this.props.borrow;
    borrow.AnnualIncome = income;

    if (income !== '') {
      console.log(income);
    }

    // this.props.dispatch(BorrowState.change({
    //   borrow: borrow
    // }));

    // this.props.dispatch(PageState.change({
    //   page: this.props.page + 1
    // }));
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationContainer />
        </View> 
        <View style={styles.questionContainer}>
          <View>
            <Text style={styles.text}>Annual Income (before tax)</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flex:0.2}}></View>
            <TextInput
              style={styles.textInput}
              keyboardType='numbers-and-punctuation'
              onChangeText={(text) => this._updateAnnualIncome({text})}
            />
            <View style={{flex:0.2}}></View>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  view: {
    backgroundColor: '#76CA44',
    borderRadius: 8,
    width: Dimensions.get('window').width - 60,
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
  textInput: {
    height: 40,
    flex: 0.8,
    color: '#000',
    backgroundColor: '#fff',
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1, 
    height: Dimensions.get('window').height - 114, 
    marginTop: - 47, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  verficationContainer: {
    width: Dimensions.get('window').width, 
    justifyContent: 'center', 
  }, 
  container: { 
    height: Dimensions.get('window').height, 
    flex: 1, 
    paddingTop: 74,
  }
});

export default AnnualIncomeView;
