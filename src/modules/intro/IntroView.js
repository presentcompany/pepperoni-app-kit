import * as IntroState from './IntroState';
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

const IntroView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  },
  increment() {
    this.props.dispatch(IntroState.increment());
  },
  reset() {
    this.props.dispatch(IntroState.reset());
  },
  random() {
    this.props.dispatch(IntroState.random());
  },
  bored() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));
  },
  pushHome() {
    this.props.dispatch(NavigationState.pushRoute({
      key: 'Color',
      title: 'Color Screen'
    }));

  },
  switchHome() {
    this.props.dispatch(NavigationState.switchTab(0));
  },

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#000'}
      : null;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pushHome} accessible={true}>
          <Text style={styles.linkButton}>
            {'Push Home State'}
          </Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={this.switchHome} accessible={true}>
          <Text style={styles.linkButton}>
            {'Switch Home State'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

export default IntroView;
