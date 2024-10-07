// src/screens/SecondScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Segunda Pantalla</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SecondScreen;
