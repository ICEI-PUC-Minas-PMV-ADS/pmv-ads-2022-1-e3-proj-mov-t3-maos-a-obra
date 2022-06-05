import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Lista from './Lista';

const Home = () => {
  const [index, setIndex] = useState(0);
  
  const [routes] = useState([
    { key: 'lista', icon: 'home' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    lista: Lista
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;