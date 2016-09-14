/*eslint-disable react/prop-types*/

import React from 'react';
import HomeContainer from './home/HomeContainer';
import MainContainer from './main/MainContainer';
/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(route, navigator) {
  if(route.name == 'Main') {
   return <MainContainer navigator={navigator}/>
  }
  if(route.name == 'Home') {
   return <HomeContainer navigator={navigator}/>
  }

  throw new Error('Unknown navigation key: ' + key);
}
