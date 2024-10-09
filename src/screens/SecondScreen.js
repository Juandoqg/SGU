import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sistema de Gestión Urbana</Text>

        {/* Botón de Cerrar Sesión en la parte superior derecha */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta con scroll en media pantalla */}
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            En esta ventana podrás realizar reportes urbanos. A continuación, puedes ver un listado de opciones o información más detallada.
          </Text>

          {/* Contenido adicional */}
          <Text style={styles.description}>Opción 1: Detalle de reporte</Text>
          <Text style={styles.description}>Opción 2: Estado de solicitudes</Text>
          <Text style={styles.description}>Opción 3: Mapa interactivo</Text>
          <Text style={styles.description}>Opción 4: Contacto con administración</Text>
          <Text style={styles.description}>Opción 5: Información adicional</Text>
        </ScrollView>
      </View>
    </View>
  );
};

// Obtener las dimensiones de la pantalla
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    backgroundColor: '#b424b4',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Para que el botón de cerrar se posicione relativo al header
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    width: '90%',
    height: screenHeight / 2, // Ocupa la mitad de la pantalla
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  scrollContent: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'left',
    marginVertical: 5,
  },
  logoutButton: {
    position: 'absolute',
    right: 10, // Separación del borde derecho
    top: 10, // Separación del borde superior
    backgroundColor: '#b424b4',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default SecondScreen;
