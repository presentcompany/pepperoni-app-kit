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
import initstyles from '../../../styles.js';

const rokerMainView = React.createClass({

  _navigate(){
    this.props.navigator.pop(0);
  },

  render() {
    return (
        <View style={[initstyles.mainBorder]}>
          <TouchableOpacity onPress={()=>this._navigate()}>
            <Text>
              Broker Page
            </Text>
          </TouchableOpacity>
        </View>
    );
  }
});

export default rokerMainView;
