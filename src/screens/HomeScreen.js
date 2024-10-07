// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Principal</Text>
      <Button
        title="Ir a la Segunda Pantalla"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

export default HomeScreen;
