import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

class CalculatorShareView extends Component {
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
              source={require('../../../images/share.png')}
            />
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: -40,
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
});

export default CalculatorShareView;
