/*eslint-disable react/prop-types*/

import React from 'react';
import CalculatorsContainer from './screens/calculator-selector/CalculatorSelectorContainer';
import HomeContainer from './home/HomeContainer';
import BrokerMainContainer from './screens/broker/BrokerMainContainer';
import BorrowContainer from './screens/borrow/main/BorrowContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(route, navigator) {
  if(route.name == 'Home') {
   return <HomeContainer navigator={navigator} {...route.passProps}/>
  } else if(route.name == 'Broker') {
   return <BrokerMainContainer navigator={navigator} {...route.passProps}/>
  } else if(route.name == 'Calculators') {
   return <CalculatorsContainer navigator={navigator} {...route.passProps}/>
  } else if(route.name == 'Borrow') {
   return <BorrowContainer navigator={navigator} {...route.passProps}/>
  }

  throw new Error('Unknown navigation key: ' + key);
}
