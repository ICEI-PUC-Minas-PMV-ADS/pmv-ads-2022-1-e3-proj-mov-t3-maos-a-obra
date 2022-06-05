import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';
import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

import {insertPrestador} from '../services/prestador.services';

const Prestador = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};


  const [show, setShow] = useState(false);

  const [name, setName] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [profissao, setProfissao] = useState(null);
  const [cep, setCep] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() =>{
    if(item){
      setName(item.name);
      setEmail(item.email);
      setTelefone(item.telefone);
      setSexo(item.sexo);
      setProfissao(item.profissao);
      setCep(item.cep);
      setEndereco(item.endereco);
    }
  }, [item]);

  const handleSalvar = () => {
    insertPrestador({
      name: name,
      email: email,
      telefone: telefone,
      sexo: sexo,
      profissao: profissao,
      cep: cep,
      endereco: endereco,
    }).then(res => {
      navigation.goBack();
    });
  };

  return (
    <Container>
      <Header title={'Prestador'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />        
      </Header>

      <Body>

        <Input
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />

        <Input
          label="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
          left={<TextInput.Icon name="phone" />}
        />

        <Input
          label="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />

        <Input
          label="sexo"
          value={sexo}
          onChangeText={(text) => setSexo(text)}
          left={<TextInput.Icon name="" />}
        />

        <Input
          label="profissão"
          value={profissao}
          onChangeText={(text) => setProfissao(text)}
          left={<TextInput.Icon name="" />}
        />

        <Input
          label="CEP"
          value={cep}
          onChangeText={(text) => setCep(text)}
          left={<TextInput.Icon name="" />}
        />

        <Input
          label="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
          left={<TextInput.Icon name="" />}
        />
        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
});

export default Prestador;
