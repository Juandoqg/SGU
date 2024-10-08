import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import styles from './SignInScreenStyles'; // Importa los estilos desde el archivo
import appFirebase from '../../credenciales';
import { getFirestore, getDoc, doc } from 'firebase/firestore'; // Importar funciones de Firestore
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importar funciones de autenticación

const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleLogin = async () => {
    try {
      // Iniciar sesión con email y contraseña
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      console.log('Usuario autenticado:', user.uid); // Muestra el UID del usuario autenticado
  
      // Verificar si el usuario existe en Firestore
      const userDoc = await getDoc(doc(db, 'usuarios', user.uid)); // Asegúrate de que estés usando el UID correcto
      if (userDoc.exists()) {
        console.log('Datos del usuario:', userDoc.data());
        navigation.navigate('MainScreen'); // Cambia 'MainScreen' por la pantalla principal de tu app
      } else {
        console.log('No se encontró el documento del usuario en Firestore');
        setError('No se encontró el usuario en la base de datos.');
      }
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setError('Email o contraseña incorrectos. Intenta nuevamente.'); // Manejar error
    }
  };
  

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null} {/* Mostrar mensaje de error */}
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none" // No capitalizar el email
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
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
