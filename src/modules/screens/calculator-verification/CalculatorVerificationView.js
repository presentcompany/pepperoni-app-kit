import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';
import * as PageState from '../../page/PageState';

const CalculatorVerificationView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired
  },

  _onPressButton() {
    if (this.props.page !== 0) {
      this.props.dispatch(PageState.change({
        page: this.props.page - 1
      }));
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
        >
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
});

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
});

export default CalculatorVerificationView;
