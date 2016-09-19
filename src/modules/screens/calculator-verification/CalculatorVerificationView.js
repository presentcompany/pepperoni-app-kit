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

  _onPressButton(direction) {

    if (this.props.page !== 0) {
      direction = (direction === 'next') ? 1 : -1;
      this.props.dispatch(PageState.change({
        page: this.props.page + direction
      }));
    }
  },

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={()=>this._onPressButton('prev')}
        >
          <Image
            style={[styles.shareIcon]}
            source={require('../../../images/arrow-return.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          {this.props.tick ? (
            <Image
              style={styles.tick}
              onPress={()=>this._onPressButton('next')}
              source={require('../../../images/tick-active.png')}
            />
          ):
            <Image
              style={styles.tick}
              source={require('../../../images/tick-inactive.png')}
            />
          }
        </TouchableHighlight>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
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

export default CalculatorVerificationView;
