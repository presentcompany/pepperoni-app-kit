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

const ApplicationTypeView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired,
    borrow: PropTypes.object.isRequired,
  },

  _updateLoanType(applicationType) {
    let borrow = this.props.borrow;
    borrow.applicationType = applicationType;

    this.props.dispatch(BorrowState.change({
      borrow: borrow
    }));

    this.props.dispatch(PageState.change({
      page: this.props.page + 1
    }));
  },

  render() {
    return (
      <View>
        <View style={styles.verficationContainer}>
          <CalculatorVerificationContainer />
        </View> 
        <View style={styles.questionContainer}>  
          <View>
            <Text style={styles.text}>Application Type</Text>
          </View>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('single')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Single</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.headerHomeButton}
            underlayColor='rgba(0,0,0,0)'
            onPress={()=>this._updateLoanType('joint')}
          >
            <View style={styles.view}>
              <Text style={styles.text}>Joint</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
});

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

export default ApplicationTypeView;
