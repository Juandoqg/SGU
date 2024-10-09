import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './MainScreenStyles'; // Importa los estilos desde el archivo
import Layout from '../components/Layout';
const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <Layout>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Main Section */}
        <View style={styles.mainSection}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Somos SGU</Text>
            <Text style={styles.subtitle}>Sistema de Gestión Urbana</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonIngresar} onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.buttonTextIngresar}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegistrar} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.buttonTextRegistrar}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>



        
      </View>
    </ScrollView>
    </Layout>
  );
};

export default MainScreen;
