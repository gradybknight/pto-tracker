import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MakeRequest from './Screens/MakeRequest';

export type Screens = 'MAKE_REQUEST' | 'VIEW_REQUESTS';

const MainApp = () => {
  const [sideNavVisible, setSideNaveVisible] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<Screens>('MAKE_REQUEST');
  return <>{currentScreen === 'MAKE_REQUEST' && <MakeRequest />}</>;
};

export default MainApp;
