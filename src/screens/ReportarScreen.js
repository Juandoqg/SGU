import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ReportarScreenStyles';

const ReportarScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => { 
    navigation.goBack(); // Volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportar</Text>
      <Text style={styles.description}>
        Aquí se mostrará donde hacer el reporte
      </Text>

      {/* Agrega más contenido aquí según sea necesario */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ReportarScreen;