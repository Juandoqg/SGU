import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import styles from './SignInScreenStyles';
import appFirebase from '../../credenciales';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Usuario autenticado:', user.uid);

      const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
      if (userDoc.exists()) {
        console.log('Datos del usuario:', userDoc.data());
        const userData = userDoc.data();
        navigation.navigate('SecondScreen', { userData });
      } else {
        console.log('No se encontró el documento del usuario en Firestore');
        setError('No se encontró el usuario en la base de datos.');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Email o contraseña incorrectos. Intenta nuevamente.');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            inputMode="email-address"
            autoCapitalize="none"
            onSubmitEditing={handleLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            onSubmitEditing={handleLogin}
          />
          {error ? <Text style={styles.errorText}>{error}</Text> : null} {/* Asegúrate de que el estilo se defina */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkText}>¿No tienes cuenta? Crear usuario</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
