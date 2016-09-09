import {Provider} from 'react-redux';
import store from './dist/redux/store';
import AppViewContainer from './dist/modules/AppViewContainer';

import React from 'react';
import {AppRegistry} from 'react-native';

const PepperoniAppTemplate = React.createClass({

  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
});

AppRegistry.registerComponent('PepperoniAppTemplate', () => PepperoniAppTemplate);
