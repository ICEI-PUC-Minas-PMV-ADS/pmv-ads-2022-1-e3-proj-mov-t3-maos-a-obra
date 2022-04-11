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
  CheckBox 
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../style/MainStyle';

export default function Cadastro({ navigation }) {
  
  const [nome, setNome] = useState(null);
  const [whatApp, setWhatApp] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [checked, setChecked] = useState (false);

  const salvar = () => {
    console.log("Salvou")
  }


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
          placeholder="WhatsApp"
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

       <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />


        <TouchableOpacity style={styles.btnSubmit} onPress={() => salvar()}>
          <Text style={styles.submitText}>Cadastrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
