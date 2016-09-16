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

import Dimensions from 'Dimensions';
import initstyles from '../../../styles.js';
import HeaderContainer from '../../header/HeaderContainer';

const styles = {
  mainBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  fullWidth: {
    width: Dimensions.get('window').width,
  },
  flexContainer: {
    justifyContent: 'center',
    width: Dimensions.get('window').width - 20,
  }
}


const rokerMainView = React.createClass({

  _navigate(){
    this.props.navigator.pop(0);
  },

  getInitialState() {
    return {
      x: '',
      y: '',
      width: '',
      height: ''
    }
  },

  measureView(event) {
    console.log('event peroperties: ', event);
    this.setState({
        x: event.nativeEvent.layout.x,
        y: event.nativeEvent.layout.y,
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height
    })
  },

  render() {
    return (
        <View>
          <View onLayout={(event) => this.measureView(event)}> 
            <HeaderContainer />
          </View>
          <View style={[styles.flexContainer, initstyles.mainBorder, {height: Dimensions.get('window').height - this.state.height - 10}]}>
            <TouchableOpacity onPress={()=>this._navigate()}>
              <Text>
                Broker Page
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
});

export default rokerMainView;
