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

const DependantsView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired,
    borrow: PropTypes.object.isRequired,
  },

  dependants: [
    {'number': 0, 'text': 'None'},
    {'number': 1, 'text': 'One'},
    {'number': 2, 'text': 'Two'},
    {'number': 3, 'text': 'Three'},
    {'number': 4, 'text': 'Four or more'}
  ],

  _updateDependants(dependants) {
    let borrow = this.props.borrow;
    borrow.dependants = dependants;

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
            <Text style={styles.text}>Number of Dependants</Text>
          </View>
          {this.dependants.map((dependant, index) => {
            return (
              <TouchableHighlight
                key={dependant.number}
                style={styles.headerHomeButton}
                underlayColor='rgba(0,0,0,0)'
                onPress={()=>this._updateDependants(dependant.number)}
              >
                <View style={styles.view}>
                  <Text style={styles.text}>{dependant.text}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
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

export default DependantsView;
