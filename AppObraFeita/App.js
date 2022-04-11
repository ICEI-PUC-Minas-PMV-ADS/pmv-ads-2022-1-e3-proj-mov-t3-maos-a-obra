import React from 'react';
import Login from './src/screens/Login';
import Principal from './src/screens/Principal';
import Cadastro from './src/screens/Cadastro'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import styles from './src/style/MainStyle';
import { View } from 'react-native'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        headerStyle: {
            backgroundColor: '#dcdcdc',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
        />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}
         options={{
        headerStyle: {
            backgroundColor: '#dcdcdc',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </Stack.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}