import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import AppRouter from '../../AppRouter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    marginBottom: 40,
  },
  shareIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 33, 
    height: 32,
  },
  tick: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
})

class CalculatorVerificationView extends Component {
  

  render() {
        return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Image
              style={[styles.shareIcon]}
              source={require('../../../images/arrow-return.png')}
            />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
              style={styles.tick}
              source={require('../../../images/tick-inactive.png')}
            />
        </TouchableHighlight>
      </View>
    );
  }
}

export default CalculatorVerificationView;
