// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import styles from './HomeScreenStyles'; // Reutiliza los mismos estilos

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [document, setDocument] = useState(''); // Estado para el documento
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      console.log('Nombre:', name);
      console.log('Documento:', document); 
      console.log('Email:', email);
      console.log('Password:', password);
      // Lógica para crear el usuario
      
    } else {
      console.log('Las contraseñas no coinciden');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Documento"
            value={document}
            onChangeText={setDocument}
            keyboardType="numeric" // Permite solo números
          />
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
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#007BFF', marginTop: 10 }]}
            onPress={() => navigation.goBack()} // Volver al HomeScreen
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default SignUpScreen;
