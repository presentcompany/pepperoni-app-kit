import React, {PropTypes, Component} from 'react';
import {
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet,
  ScrollView
} from 'react-native';

import Swiper from 'react-native-swiper';

import AppRouter from '../AppRouter';
import initstyles from '../../styles.js';
import CalculatorSelectorView from '../calculator-selector/CalculatorSelectorView.js';
import CalculatorLoadView from '../calculator-load/CalculatorLoadView.js';
import CalculatorResultsView from '../calculator-results/CalculatorResultsView.js';

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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

class BorderBoxView extends Component {

  render() {
    return (
        <View style={[initstyles.mainBorder, styles.container]}> 
          <Swiper style={initstyles.wrapper} showsButtons={false} loop={false}>
            <View style={styles.slide1}>
              <CalculatorSelectorView />
            </View>
            <View style={styles.slide2}>
              <CalculatorLoadView />
            </View>
            <View style={styles.slide3}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <CalculatorResultsView />
              </ScrollView>
            </View>
          </Swiper>
        </View>
    );
  }
}

export default BorderBoxView;
