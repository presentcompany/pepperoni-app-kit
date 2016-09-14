import React, {Component} from 'react';
import {View} from 'react-native';
import NavigationContainer from './navigation/NavigationContainer';

class AppView extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer />
      </View>
    );
  }
}

export default AppView;
