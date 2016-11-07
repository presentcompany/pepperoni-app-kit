import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import Dimensions from 'Dimensions';
import styles from '../../styles.js';
import FlexContainer from '../../components/FlexContainer';
import BrokerButton from '../../components/buttons/BrokerButton';

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
      <FlexContainer>
        <Image 
          style={[inlineStyles.oxygenLogo]}
          source={require('../../images/oxygen_logo_white.png')}
        />
        <Text style={[inlineStyles.text, inlineStyles.bylineMargin]}>Home loans made simple.</Text>
        
        <BrokerButton navigator={this.props.navigator} />
        <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=>this._navigate('Calculators')}>
          <View style={inlineStyles.income}>
            <Image 
              style={inlineStyles.loanLogo}
              source={require('../../images/loan_calculator_logo.png')}
            />
            <Text style={inlineStyles.text}>Loan Calculators</Text>
          </View>
        </TouchableHighlight>
      </FlexContainer>
    );
  }
});

var inlineStyles = StyleSheet.create({
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
