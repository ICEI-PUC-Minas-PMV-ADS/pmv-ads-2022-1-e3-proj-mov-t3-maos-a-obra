import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Routes from '../routes/index'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import styles from '../style/MainStyle';

export default function Inicial() {
const navigation = useNavigation();

 return (
    <View style={styles.containerInicial}>
      <View style={styles.containerLogoInicial}>
        <Animatable.Image
          animation="flipInY" 
          source={require('../assets/logoObraFeita.png')}
          style={{width: '100%'}}
          resizeMode="contain"
         />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Seja bem-vindo ao ObraFeita!</Text>
        <Text style={styles.text}>Um App desenvolvido para facilitar a contratação de profissionais qualificados.</Text>

        <TouchableOpacity
         style={styles.button1}
         onPress={ () => navigation.navigate('Login')}
         >
          <Text style={styles.buttonText}>Mostre seu trabalho, seja um profissional reconhecido!</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={styles.button2} 
         onPress={ () => navigation.navigate('Login')}
         >
          <Text style={styles.buttonText}>Encontre os melhores profissionais da sua região, veja, curta e comente sobre seus trabalhos.</Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
    );
}
