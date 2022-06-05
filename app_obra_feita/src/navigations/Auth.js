import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StatusBar } from 'react-native'

import Login from '../pages/Login';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
              backgroundColor: '#f8f8ff',
            },
            headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Registro',
          headerStyle: {
              backgroundColor: '#f8f8ff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold'},
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
