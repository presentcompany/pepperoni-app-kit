import * as CounterState from './CounterState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import styles from '../../styles.js';

const CounterView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  increment() {
    this.props.dispatch(CounterState.increment());
  },
  reset() {
    this.props.dispatch(CounterState.reset());
  },
  random() {
    this.props.dispatch(CounterState.random());
  },
  bored() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));
  },

  renderUserInfo() {
    if (!this.props.userName) {
      return null;
    }

    return (
      <View style={styles.userContainer}>
        <Image
          style={styles.userProfilePhoto}
          source={{
            uri: this.props.userProfilePhoto,
            width: 80,
            height: 80
          }}
        />
        <Text style={styles.linkButton}>
          Welcome, {this.props.userName}!
        </Text>
      </View>
    );
  },
  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#000'}
      : null;

    return (
      <View style={styles.container}>

        <Image
          style={
            {
              width: 154,
              height: 60
            }
          }
          source={require('../../images/oxygen.png')}
        />

        <TouchableOpacity
          onPress={this.increment}
          style={[styles.counterButton, loadingStyle]}>
          <Text style={styles.counter}>
            {this.props.counter}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.reset}>
          <Text style={styles.linkButton}>
            Reset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.random}>
          <Text style={styles.linkButton}>
            Random
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.bored} accessible={true}>
          <Text style={styles.linkButton}>
            {'I\'m really really bored!'}
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
});

export default CounterView;
