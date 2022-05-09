import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Button,
} from 'react-native';

import styles from '../style/MainStyle';

import {register} from '../services/auth.services'

export default function Login({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const acessar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Feed' }],
    });
  };

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
    }).start();
  });

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/logoObraFeita.png')} />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: offset.y }],
          },
        ]}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          onChanceText={(Value) => setEmail(Value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          autoCorrect={false}
          onChanceText={(value) => setPassword(value)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => acessar()}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => cadastrar()}>
          <Text style={styles.registerText}>Cadastre-se</Text>
          
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
