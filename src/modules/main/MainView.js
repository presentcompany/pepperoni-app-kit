import React, {PropTypes, Component} from 'react';
import {
  Modal, 
  Text,
  Image,
  Navigator,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import PageControl from'react-native-page-control';

import styles from '../../../styles.js';
import HeaderContainer from '../../header/HeaderContainer';
import LayoutBorderContainer from '../../layoutborder/LayoutBorderContainer';

const MainView = React.createClass({
  
  propTypes: {
    navigator: PropTypes.object.isRequired,
  },

  _onPressButton() {
      console.log("Borrow tapped");
  },

  _onPressButtonTwo() {
      console.log("Repayments tapped");
  },

  _onPressButtonThree() {
      console.log("Stamp duty tapped");
  },

  _navigate(page){
    console.log(this.props);
    this.props.navigator.push({
      name: page,
    });
  },

  render() {
    return (
      <View style={[styles.mainBorder, styles.container, styles.mainBackground]}>
        <HeaderContainer navigator={this.props.navigator}/>
        <LayoutBorderContainer navigator={this.props.navigator}>
          <Swiper 
            ref='swiper' 
            style={initstyles.wrapper} 
            showsButtons={false} 
            loop={false}
            onMomentumScrollEnd = {this._onMomentumScrollEnd}>
            <View style={styles.slide1}>
              <CalculatorSelectorContainer navigator={this.props.navigator}/>
            </View>
            <View style={styles.slide4}>
              <CalculatorContainer />
            </View>
            <View style={styles.slide5}>
              <CalculatorContainer />
            </View>
            <View style={styles.slide2}>
              <CalculatorLoadContainer />
            </View>
            <View style={styles.slide3}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <CalculatorResultsContainer />
              </ScrollView>
            </View>
          </Swiper>
        </LayoutBorderContainer>
     </View>
    );
  }
});

export default MainView;
