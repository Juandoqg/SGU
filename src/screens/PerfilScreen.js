import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './PerfilScreenStyles';

const PerfilScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => { 
    navigation.goBack(); // Volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.description}>
        Aquí se mostrará el perfil del usuario
      </Text>

      {/* Agrega más contenido aquí según sea necesario */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};


export default PerfilScreen;