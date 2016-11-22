import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
import mainViewStyles from '../../styles/modules/_main_view.js';

const HomeView = React.createClass({

  propTypes: {
    navigator: PropTypes.object.isRequired,
  },

  _navigate(page){
    this.props.navigator.push({
      name: page,
    });
  },

  render() {
    return (
      <View style={mainViewStyles.mainBackground}>
        <View style={inlineStyles.flexContainer}>
          <Image 
            style={[inlineStyles.oxygenLogo]}
            source={require('../../images/oxygen_logo_white.png')}
          />
          <Text style={[inlineStyles.text, inlineStyles.bylineMargin]}>Home loans made simple.</Text>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=>this._navigate('Broker')}>
            <View style={inlineStyles.brokerStyles}>
              <Image 
                style={inlineStyles.brokerIcon}
                source={require('../../images/find_broker_icon.png')}
              />
              <Text style={inlineStyles.text}>Find A Broker</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=>this._navigate('Calculators')}>
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
});

var inlineStyles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#22B7EE',
  },
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingLeft: 20,
    paddingRight: 20,
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
    width: Dimensions.get('window').width/1.2,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  brokerStyles: {
    backgroundColor: '#76CA44',
    height: 60,
    width: Dimensions.get('window').width/1.2,
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

});

export default HomeView;
