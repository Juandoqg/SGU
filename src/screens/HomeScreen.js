// src/screens/HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Layout from '../components/Layout'; // Importa el layout
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const HomeScreen = () => {
  const navigation = useNavigation(); // Obtén la instancia de navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button 
        title="Ir a Segunda Pantalla" 
        onPress={() => navigation.navigate('Second')} // Navega a SecondScreen
        style={styles.button} 
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default HomeScreen;
