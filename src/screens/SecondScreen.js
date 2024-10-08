import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sistema de Gestión Urbana</Text>
      </View>

      {/* Tarjeta con scroll en media pantalla */}
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            En esta ventana podrás realizar reportes urbanos. A continuación, puedes ver un listado de opciones o información más detallada.
          </Text>

          {/* Agrega más contenido para demostrar el scroll */}
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
});

export default SecondScreen;
