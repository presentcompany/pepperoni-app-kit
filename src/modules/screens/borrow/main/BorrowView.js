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
import CalculatorLoadContainer from '../load/LoadContainer';
import CalculatorContainer from '../calculator/CalculatorContainer';
import CalculatorResultsContainer from '../results/ResultsContainer';

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

  render() {
    return (
      <View style={[ initstyles.mainBackground]}>
        <HeaderContainer navigator={this.props.navigator}/>
        <LayoutBorderContainer navigator={this.props.navigator}>
          <Swiper 
            ref='swiper' 
            style={initstyles.wrapper} 
            showsButtons={false} 
            loop={false}
            onMomentumScrollEnd = {this._onMomentumScrollEnd}>
            <View style={styles.slide2}>
              <CalculatorLoadContainer />
            </View>
            <View style={styles.slide4}>
              <CalculatorContainer />
            </View>
            <View style={styles.slide5}>
              <CalculatorContainer />
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

export default BorrowView;
