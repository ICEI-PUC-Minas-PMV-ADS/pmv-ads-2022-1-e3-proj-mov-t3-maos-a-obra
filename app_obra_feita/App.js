import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#dcdcd" barStyle="dark-content" />
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
