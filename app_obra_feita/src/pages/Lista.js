import React, {useEffect, useState} from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';
import {getPrestador} from '../services/prestador.services';

import { useIsFocused } from '@react-navigation/native';

const Lista = ({route}) => {
  
  const { item } = route.params ? route.params : {};

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {name} = useUser();
  const tipo = item.tipo;
  const [prestador, setPrestador] = useState([]);

  useEffect(() => {
      getPrestador().then(dados => {
        console.log(dados);
        setPrestador(dados);
      });
    },[isFocused]);
    
  const renderItem = ({ item }) => (
  <List.Item
    title={
      item.name
    }
    description={item.profissao}
    left={(props) => (
      <List.Icon
        {...props}
        color={'black'}
        icon="account"
      />
    )}
    right={(props) => (
      <Text {...props} style={{ alignSelf: 'center' }}>
        {' '}
        {item.telefone}{' '}
      </Text>
    )}
    onPress={() => navigation.navigate('Prestador', {item})}
  />
);  

  return (
  <Container>
      <Header title={'Olá, ' + name} />
      <Body>
        <FlatList
          data={prestador}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Prestador')}
        />
      </Body>
    </Container>);
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8f8ff'
  },
});

export default Lista;
