import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import MainViewContainer from './main/MainViewContainer';
import MainView from './main/MainView';
import * as auth0 from '../services/auth0';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';

class AppView extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <MainViewContainer />
      </View>
    );
  }
}

export default AppView;
