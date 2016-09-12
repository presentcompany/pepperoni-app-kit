import * as IntroState from './IntroState';
import * as TextState from '../text/TextState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';
import styles from '../../styles.js';

const IntroView = React.createClass({
  propTypes: {
    counter: PropTypes.number.isRequired,
    userName: PropTypes.string,
    userProfilePhoto: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    text: PropTypes.object
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
  updateText(text) {
    this.props.dispatch(TextState.change(text))
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
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.updateText({text})}
          value={this.props.text.text}
        />
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
