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

import AppRouter from '../../AppRouter';
import initstyles from '../../../styles.js';
import * as PageState from '../../page/PageState';
import CalculatorSelectorContainer from '../calculator-selector/CalculatorSelectorContainer';
import CalculatorLoadContainer from '../calculator-load/CalculatorLoadContainer';
import CalculatorContainer from '../calculator/CalculatorContainer';
import CalculatorResultsContainer from '../calculator-results/CalculatorResultsContainer';

const BorderBoxView = React.createClass({

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
        <View style={[initstyles.mainBorder, styles.container]}>
          <TouchableOpacity onPress={()=>this._onPressButton(2)}>
            <Text>
              Go to page 2
            </Text>
          </TouchableOpacity>
          <Swiper 
            ref='swiper' 
            style={initstyles.wrapper} 
            showsButtons={false} 
            loop={false}
            onMomentumScrollEnd = {this._onMomentumScrollEnd}>
            <View style={styles.slide1}>
              <CalculatorSelectorContainer />
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

export default BorderBoxView;
