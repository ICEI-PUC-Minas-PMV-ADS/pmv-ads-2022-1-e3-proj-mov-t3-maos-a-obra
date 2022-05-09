import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

import UserProvider from './src/contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <StatusBar backgroundColor="#dcdcdc" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
    </UserProvider>
  );
}
