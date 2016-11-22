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
import CalculatorButton from '../../components/buttons/CalculatorButton';
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
      <FlexContainer>
        <Image 
          style={[inlineStyles.oxygenLogo]}
          source={require('../../images/oxygen_logo_white.png')}
        />
        <Text style={[inlineStyles.text, inlineStyles.bylineMargin]}>Home loans made simple.</Text>
        <BrokerButton navigator={this.props.navigator} />
        <CalculatorButton navigator={this.props.navigator} />
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
  oxygenLogo: {
    marginBottom: 10,
  }
});

export default HomeView;
