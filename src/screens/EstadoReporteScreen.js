import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './EstadoReporteScreenStyles';

const EstadoReporteScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => { 
    navigation.goBack(); // Volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado de reportes</Text>
      <Text style={styles.description}>
        Aquí se mostrará el  estado de reportes
      </Text>

      {/* Agrega más contenido aquí según sea necesario */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};


export default EstadoReporteScreen;