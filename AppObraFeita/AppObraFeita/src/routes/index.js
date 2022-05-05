import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Inicial from '../screens/Inicial'
import Login from '../screens/Login'
import Feed from '../screens/Feed'
import Cadastro from '../screens/Cadastro'

import styles from '../style/MainStyle'
import { View, StatusBar } from 'react-native'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
        <Stack.Screen
    name="Inicial"
    component={Inicial}
    options={{
      headerShown: false
    }}
    />
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          herder: () => null,
          //headerShown: false,
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
        name="Feed"
        component={Feed}
         />    

      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
         options={{
            herder: () => null,
            headerStyle: {
              backgroundColor: '#f8f8ff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Stack.Navigator>
  )
}
