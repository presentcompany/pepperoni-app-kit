import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import styles from '../../../styles.js';
import HeaderContainer from '../../header/HeaderContainer';
import Dimensions from 'Dimensions';

const inlineStyles = {
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height/4,
  },
  mainText: {
    marginTop: Dimensions.get('window').height/60,
    marginBottom: Dimensions.get('window').height/60,
  }
}

const CalculatorSelectorView = React.createClass({
  propTypes: {
    navigator: PropTypes.object.isRequired
  },

  _navigate(page){
    this.props.navigator.push({
      name: page,
    });
  },

  _onPressButtonTwo() {
  },

  _onPressButtonThree() {
      console.log("Stamp duty tapped");
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
    this.setState({
        x: event.nativeEvent.layout.x,
        y: event.nativeEvent.layout.y,
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height
    })
  },

  render() {
    return (
      <View style={styles.mainBackground}>
        <View onLayout={(event) => this.measureView(event)}>
          <HeaderContainer navigator={this.props.navigator}/>
        </View>
        <View style={[styles.mainBorder, {height: Dimensions.get('window').height - this.state.height - 20}]}>
          <View style={inlineStyles.container}>
            <View style={[inlineStyles.imageContainer]}>
              <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={()=>this._navigate('Borrow')}>
                <Image
                  style={styles.mainButton}
                  source={require('../../../images/borrow-button.png')}
                />
              </TouchableHighlight>
              <Text style={[styles.mainText, inlineStyles.mainText]}>How much can I borrow?</Text>
            </View>
            <View style={inlineStyles.imageContainer}> 
              <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonTwo}>
                <Image
                  style={styles.mainButton}
                  source={require('../../../images/repayments-button.png')}
                />
              </TouchableHighlight>
              <Text style={[styles.mainText, inlineStyles.mainText]}>What are my repayments?</Text>
            </View>
            <View style={[inlineStyles.imageContainer, styles.imageContainerLast]}>
              <TouchableHighlight underlayColor='rgba(0,0,0,0)' onPress={this._onPressButtonThree}>
                <Image
                  style={styles.mainButton}
                  source={require('../../../images/stamp-duty-button.png')}
                />
              </TouchableHighlight>
              <Text style={[styles.mainText, inlineStyles.mainText]}>What is my stamp duty?</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

export default CalculatorSelectorView;
