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

import Swiper from 'react-native-swiper';

import initstyles from '../../../../styles.js';
import * as PageState from '../../../page/PageState';
import HeaderContainer from '../../../header/HeaderContainer';
import LayoutBorderContainer from '../../../layoutborder/LayoutBorderContainer';
import LoanTypeContainer from '../loanType/LoanTypeContainer';
import ApplicationTypeContainer from '../applicationType/ApplicationTypeContainer';
import DependantsContainer from '../dependants/DependantsContainer';
import CalculatorContainer from '../../calculator/CalculatorContainer';
import CalculatorResultsContainer from '../results/ResultsContainer';
import Dimensions from 'Dimensions';


const BorrowView = React.createClass({

  propTypes: {
    page: PropTypes.number.isRequired
  },

  _onPressButton(page) {
    this.props.dispatch(PageState.change({
      page: page
    }));
  },

  _onMomentumScrollEnd() {
    this.props.dispatch(PageState.change({
      page: this.refs.swiper.state.index
    }));
  },

  componentDidUpdate() {
    const newPage = this.props.page - this.refs.swiper.state.index;
    this.refs.swiper.scrollBy(newPage);
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
    });
    console.log('height: ', this.state.height);
  },

  render() {
    return (
      <View style={[initstyles.mainBackground]}>
        <View onLayout={(event) => this.measureView(event)}>
          <HeaderContainer navigator={this.props.navigator}/>
        </View>
        <View style={{height: Dimensions.get('window').height - this.state.height - 10}}>
          <LayoutBorderContainer navigator={this.props.navigator}>
            <Swiper 
              ref='swiper' 
              style={[initstyles.wrapper, {height: Dimensions.get('window').height - this.state.height - 10}]} 
              showsButtons={false} 
              loop={false}
              onMomentumScrollEnd = {this._onMomentumScrollEnd}
              >
              <View style={styles.slide} viewHeight={this.state.height}>
                <LoanTypeContainer />
              </View>
              <View style={styles.slide}>
                <ApplicationTypeContainer />
              </View>
              <View style={styles.slide}>
                <DependantsContainer />
              </View>
              <View style={styles.slide}>
                <CalculatorContainer />
              </View>
              <View style={styles.slide}>
                <CalculatorContainer />
              </View>
              <View style={styles.slide}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <CalculatorResultsContainer />
                </ScrollView>
              </View>
            </Swiper>
          </LayoutBorderContainer>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
  },
  wrapper: {
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default BorrowView;
