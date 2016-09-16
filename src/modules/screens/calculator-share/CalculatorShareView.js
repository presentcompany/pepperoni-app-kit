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
  },
  shareIcon: {
    position: 'absolute',
    top: 0,
    left: 20,
    width: 33, 
    height: 32,
  },
  tick: {
    position: 'absolute',
    top: 0,
    right: 20,
  }
});

export default CalculatorShareView;
