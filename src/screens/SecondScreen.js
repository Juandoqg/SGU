import React from 'react'; 
import { View, Text,  ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SecondScreenStyles';

const SecondScreen = () => {

  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('MainScreen');
  };


  const handlePressOption = (option) => {
    console.log(option); // Manejar la opción seleccionada
    if (option === 'Perfil') {
      navigation.navigate('PerfilScreen'); // Redirigir a DetalleReporteScreen
    }
    if (option === 'Reportar') {
      navigation.navigate('ReportarScreen'); // Redirigir a DetalleReporteScreen
    }
    if (option === 'Estado del reporte') {
      navigation.navigate('EstadoReporteScreen'); // Redirigir a DetalleReporteScreen
    }
    if (option === 'Info') {
      navigation.navigate('InfoAdicionalScreen'); // Redirigir a DetalleReporteScreen
    }
   
  };
  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sistema de Gestión Urbana</Text>

        {/* Botón de Cerrar Sesión */}
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tarjeta con scroll que ocupa toda la pantalla menos el header */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            En esta ventana podrás realizar reportes urbanos. A continuación, puedes ver un listado de opciones o información más detallada.
          </Text>

          {/* Botones para las opciones */}
          <View style={styles.buttonContainer}>
            {['Perfil', 'Reportar', 'Estado del reporte', 'Info'].map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handlePressOption(option)}
                activeOpacity={0.7} // Cambia la opacidad al presionar
              >
                <Text style={styles.optionButtonText}>Opción {index + 1}: {option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



export default SecondScreen;
