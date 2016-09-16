import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import CalculatorVerificationContainer from '../../calculator-verification/CalculatorVerificationContainer';
import * as BorrowState from '../main/BorrowState';
import * as PageState from '../../../page/PageState';
import Dimensions from 'Dimensions'; 

const LoanTypeView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired,
    borrow: PropTypes.object.isRequired,
  },

  _updateLoanType(loanType) {
    let borrow = this.props.borrow;
    borrow.loanType = loanType;

    this.props.dispatch(BorrowState.change({
      borrow: borrow
    }));

    this.props.dispatch(PageState.change({
      page: this.props.page + 1
    }));
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationContainer />
        </View> 
        <View style={styles.questionContainer}>  
          <View>
            <Text style={styles.text}>I need a loan to...</Text>
          </View>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('firstHome')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Buy my first home</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('nextHome')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Buy my next home</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('refinance')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Refinance an</Text>
              <Text style={styles.text}>existing loan</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('investment')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Buy an investment</Text>
              <Text style={styles.text}>property</Text>
            </View>
          </TouchableHighlight>
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

export default LoanTypeView;
