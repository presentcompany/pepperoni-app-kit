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
      <View style={[initstyles.mainBorder, styles.container]}>
         {this.props.children}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide4: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide5: {
    flex: 1,
    marginLeft: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default LayoutBorderView;
