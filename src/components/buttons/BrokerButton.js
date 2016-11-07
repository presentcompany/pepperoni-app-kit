import React, {PropTypes, Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import Dimensions from 'Dimensions';

class BrokerButton extends Component {
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
      	onPress={()=>this._navigate('Broker')}>
        <View style={styles.brokerStyles}>
          <Image 
            style={styles.brokerIcon}
            source={require('../../images/find_broker_icon.png')}
          />
          <Text style={styles.text}>Find A Broker</Text>
        </View>
      </TouchableHighlight>
    );
  }
};

BrokerButton.propTypes = {
	navigator: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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
});

export default BrokerButton;
