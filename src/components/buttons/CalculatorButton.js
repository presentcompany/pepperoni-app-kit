import React, {PropTypes, Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Dimensions from 'Dimensions';

class CalculatorButton extends Component {
	constructor(props) {
    super(props);
  }

  _navigate(page) {
    this.props.navigator.push({
      name: page,
    });
  }

  render() {
    return (
      <TouchableHighlight 
      	underlayColor='rgba(0,0,0,0)' 
      	onPress={()=>this._navigate('Calculators')}>
        <View style={styles.income}>
          <Image 
            style={styles.loanLogo}
            source={require('../../images/loan_calculator_logo.png')}
          />
          <Text style={styles.text}>Loan Calculators</Text>
        </View>
      </TouchableHighlight>
    );
  }
};

CalculatorButton.propTypes = {
	navigator: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default CalculatorButton;
