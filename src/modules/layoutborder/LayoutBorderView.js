import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableOpacity,
  View, 
  StyleSheet,
  ScrollView
} from 'react-native';

import mainViewStyles from '../../styles/modules/_main_view.js';

const LayoutBorderView = React.createClass({

  render() {
    return (
      <View style={[mainViewStyles.mainBorder]}>
         {this.props.children}
      </View>
    );
  }
});

export default LayoutBorderView;
