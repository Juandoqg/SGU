
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CustomButton from './src/components/customButton';


export default function App() {
  // Función que se ejecuta cuando se presiona el botón
  const handleButtonPress = () => {
    Alert.alert('¡Botón presionado!', 'Has presionado el botón.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a mi App!</Text>

      {/* Aquí usamos el componente CustomButton */}
      <CustomButton title="Presiona aquí" onPress={handleButtonPress} />
    </View>
  );
}

// Estilos de la pantalla principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
