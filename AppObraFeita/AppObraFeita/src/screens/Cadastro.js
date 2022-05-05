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
  CheckBox,
  Alert 
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../style/MainStyle';

import {insertUsuario, getUsuarios} from '../services/UsuariosServicesDB'
import {register} from '../services/auth.services'

export default function Cadastro({ navigation }) {
  
  const [nome, setNome] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  

const salvar = () => {
  console.log(salvar);
}

//   const salvar = () => {
    
//     register({
//       nome: nome,
//       email: email,
//       senha: senha,
//       telefone: telefone,
//       sexo: sexo,
//       profissao: profissao,
//       cep: cep,
//       endereco: endereco,
      
//     }).then( res => {
//       console.log(res);

//     if(res){

//       Alert.alert('Atenção', 'Usuário cadastrado com sucesso!',[
//         { text: "OK", onPress: () => navigation.goBack() }
//       ]);

//     }else{

//       Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde');
//     }

//   });
    
// }


  return (
      <KeyboardAvoidingView style={styles.background}>
        <TextInput
          style={styles.inputCadastro}
          placeholder="Nome"
          onChanceText={(Value) => setEmail(Value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="E-mail"
          onChanceText={(value) => setSenha(value)}
        />

        <TextInput
          style={styles.inputCadastro}
          placeholder="Telefone"
          onChanceText={(value) => setSenha(value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Sexo"
          onChanceText={(value) => setSenha(value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Profissão"
          onChanceText={(value) => setSenha(value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="CEP"
          onChanceText={(value) => setSenha(value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Endereço"
          onChanceText={(value) => setSenha(value)}
        />

         <TextInput
          style={styles.inputCadastro}
          placeholder="Senha"
          onChanceText={(value) => setSenha(value)}
        />

        <TouchableOpacity style={styles.btnSubmit} onPress={() => salvar()}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
