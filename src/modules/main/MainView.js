import React, {PropTypes, Component} from 'react';
import {
  Modal, 
  Text,
  Image,
  Switch, 
  TouchableHighlight, 
  View, 
  StyleSheet
} from 'react-native';

import PageControl from'react-native-page-control';

import AppRouter from '../AppRouter';
import styles from '../../styles.js';

class MainView extends Component {
  render() {
    return (
      <View style={styles.mainBackground}>
        <View style={styles.header}>
          <View style={styles.flexContainer}>
            <Image 
                style={styles.headerLogo}
                source={require('../../images/oxygen_logo.png')}
            />
            <Image 
                style={styles.headerHomeButton}
                source={require('../../images/home-button.png')}
            />
          </View>
        </View>
        <View style={styles.mainBorder}> 
          <View style={[styles.imageContainer, styles.imageContainerFirst]}>
            <Image
              style={styles.mainButton}
              source={require('../../images/borrow-button.png')}
            />
            <Text style={styles.mainText}>How much can I borrow?</Text>
          </View>
          <View style={styles.imageContainer}> 
            <Image
              style={styles.mainButton}
              source={require('../../images/repayments-button.png')}
            />
            <Text style={styles.mainText}>What are my repayments?</Text>
          </View>
          <View style={[styles.imageContainer, styles.imageContainerLast]}>
            <Image
              style={styles.mainButton}
              source={require('../../images/stamp-duty-button.png')}
            />
            <Text style={styles.mainText}>What is my stamp duty?</Text>
          </View>
        </View>
     </View>
    );
  }
}

export default MainView;
