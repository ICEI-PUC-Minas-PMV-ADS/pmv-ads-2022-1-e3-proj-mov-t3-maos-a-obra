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
  StatusBar,
  Alert 
} from 'react-native';
import styles from '../style/MainStyle';
import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
    
  const [name, setName] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [email, setEmail] = useState('email@pucminas.br');
  const [password, setPassword] = useState('SenhaPucminas');
  
  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password,
      telefone: telefone,
      sexo: sexo,
      profissao: profissao,
      cep: cep,
      endereco: endereco
      }).then( res => {
      console.log(res);

    if(res){

      Alert.alert('Atenção', 'Usuário cadastrado com sucesso!',[
        { text: "OK", onPress: () => navigation.goBack() }
      ]);

    }else{

      Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde');
    }

  });
    
}

return (
      <KeyboardAvoidingView style={styles.background}>
        <TextInput
          style={styles.inputCadastro}
          placeholder="Nome"          
           value={name}
          onChangeText={(text) => setName(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="E-mail"
           value={email}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.inputCadastro}
          placeholder="Telefone"
           value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Sexo"
         value={sexo}
          onChangeText={(text) => setSexo(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Profissão"
          value={profissao}
          onChanceText={(text) => setProfissao(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Senha"   
           value={password}
          onChangeText={(text) => setTelefone(text)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={handleRegister}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Register;
