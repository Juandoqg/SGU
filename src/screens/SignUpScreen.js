import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import styles from './SignInScreenStyles'; // Reutiliza los mismos estilos
import appFirebase from '../../credenciales';
import { getFirestore, collection, addDoc , doc, setDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [document, setDocument] = useState(''); // Estado para el documento
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Estado para manejar errores

  const handleSignUp = async () => {
    if (password === confirmPassword) {
      try {
        // Crear usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Almacenar los datos del usuario en Firestore
        await setDoc(doc(db, 'usuarios', user.uid), {
          uid : user.uid,
          name: name,
          document: document,
          email: email
        });

        console.log('Usuario registrado:', { name, document, email });
        navigation.navigate('SignIn'); // Redirigir a la pantalla de inicio después del registro
      } catch (err) {
        console.error('Error al registrar el usuario:', err);
        setError('Error al registrar el usuario. Intenta nuevamente.');
      }
    } else {
      setError('Las contraseñas no coinciden');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
          
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
            style={[styles.button, { backgroundColor: '#b424b4', marginTop: 10 }]}
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
