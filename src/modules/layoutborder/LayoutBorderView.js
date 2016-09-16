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

import initstyles from '../../styles.js';

const LayoutBorderView = React.createClass({

  render() {
    return (
      <View style={[initstyles.mainBorder]}>
         {this.props.children}
      </View>
    );
  }
});

export default LayoutBorderView;
