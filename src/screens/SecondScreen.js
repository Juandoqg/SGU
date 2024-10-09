import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import styles from './SecondScreenStyles';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('MainScreen');
  };

  const handlePress = (option) => {
    console.log(option); // Aquí puedes manejar el evento de presión
  };

  return (
    <Layout>
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            En esta ventana podrás realizar reportes urbanos. A continuación, puedes ver un listado de opciones o información más detallada.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('Perfil')}>
              <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('Reportar incidente')}>
              <Text style={styles.buttonText}>Reportar incidente</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('Mapa interactivo')}>
              <Text style={styles.buttonText}>Opción 3: Mapa interactivo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('Contacto con administración')}>
              <Text style={styles.buttonText}>Opción 4: Contacto con administración</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('Información adicional')}>
              <Text style={styles.buttonText}>Opción 5: Información adicional</Text>
            </TouchableOpacity>

            {/* Botón de Cerrar Sesión */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'red' }]} // Usa el mismo estilo de botón con fondo rojo
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Cerrar Sesión</Text> {/* Usa el mismo estilo de texto */}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default SecondScreen;
