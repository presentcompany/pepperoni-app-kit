import React, {PropTypes, Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';

class FlexContainer extends Component {
  render() {
    return (
     <View style={styles.mainBackground}>
       <View style={styles.flexContainer}>
         {this.props.children}
       </View>
     </View>
    );
  }
};

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingLeft: 20,
    paddingRight: 20,
  },
  mainBackground: {
    backgroundColor: '#22B7EE',
    flex: 1,
  }
});

export default FlexContainer;
