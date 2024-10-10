import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './InfoAdicionalScreenStyles';

const InfoAdicionalScreen = () => { 
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack(); // Volver a la pantalla anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información adicional</Text>
      <Text style={styles.description}>
        Aquí se mostrará la información adicional.
      </Text>

      {/* Agrega más contenido aquí según sea necesario */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoAdicionalScreen;
