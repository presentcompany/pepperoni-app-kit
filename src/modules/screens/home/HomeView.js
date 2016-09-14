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
import Dimensions from 'Dimensions';

import AppRouter from '../AppRouter';

import styles from '../../styles.js';

var inlineStyles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#22B7EE',
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bylineMargin: {
    marginBottom: 30,
  },
  income: {
    height: 60,
    backgroundColor: '#1989B2',
    width: 315,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  brokerStyles: {
    backgroundColor: '#76CA44',
    height: 60,
    width: 315,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  brokerIcon: {
    width: 34,
    height: 33,
    marginRight: 10,
  },
  loanLogo: {
    width: 26,
    height: 30,
    marginRight: 10,
  },
  oxygenLogo: {
    marginBottom: 10,
  }

})

class HomeView extends Component {
  _findABroker() {
      console.log("Find Brokers");
  }

  _loanCalculators() {
      console.log("Loan Calculators");
  }

  render() {
    return (
      <View style={styles.mainBackground}>
        <View style={inlineStyles.flexContainer}>
          <Image 
                style={[inlineStyles.oxygenLogo]}
                source={require('../../images/oxygen_logo_white.png')}
          />
          <Text style={[inlineStyles.text, inlineStyles.bylineMargin]}>Home loads made simple.</Text>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._findABroker}>
            <View style={inlineStyles.brokerStyles}>
              <Image 
                  style={inlineStyles.brokerIcon}
                  source={require('../../images/find_broker_icon.png')}
              />
              <Text style={inlineStyles.text}>Find A Broker</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._loanCalculators}>
            <View style={inlineStyles.income}>
              <Image 
                  style={inlineStyles.loanLogo}
                  source={require('../../images/loan_calculator_logo.png')}
              />
              <Text style={inlineStyles.text}>Loan Calculators</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default HomeView;
