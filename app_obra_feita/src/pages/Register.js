import React, { useState } from 'react';
import { TextInput, Button, Headline, RadioButton } from 'react-native-paper';
import Container from '../components/Container';
import Input from '../components/Input';
import {
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  View, 
  Alert
} from 'react-native';
import styles from '../style/MainStyle';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();

  const [tipo, setTipo] = useState('Usuario');
  const [name, setName] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleRegister = () => {

    register({
      tipo: tipo == 'Usuario' ? 0 : 1,
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

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
      }

    });
    
  }

  return (
    <Container>
      <View style={stylesRadio.containerRadio}>
        <View style={stylesRadio.containerRadioItem}>
          <RadioButton
            value="first"
            status={tipo === 'prestador' ? 'checked' : 'unchecked'}
            onPress={() => setTipo('prestador')}
          />
          <Text>Prestador</Text>
        </View>

        <View style={stylesRadio.containerRadioItem}>
          <RadioButton
            value="first"
            status={tipo === 'usuario' ? 'checked' : 'unchecked'}
            onPress={() => setTipo('usuario')}
          />
          <Text>Usuario</Text>
        </View>
      </View>
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
          onChangeText={(text) => setEmail(text)}
        />

        <Input
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
          placeholder="Profissao"
          value={profissao}
          onChanceText={(text) => setProfissao(text)}
        />

         <Input
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
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </KeyboardAvoidingView> 
    </Container>
  );
};

const stylesRadio = StyleSheet.create({
  containerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});


export default Register;
