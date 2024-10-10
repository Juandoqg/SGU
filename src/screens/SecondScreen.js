import React from 'react'; 
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SecondScreenStyles';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('MainScreen');
  };

  const handlePressOption = (option) => {
    console.log(option);
    const screenMapping = {
      'Perfil': 'PerfilScreen',
      'Reportar': 'ReportarScreen',
      'Estado del reporte': 'EstadoReporteScreen',
      'Info': 'InfoAdicionalScreen'
    };
    navigation.navigate(screenMapping[option]);
  };

  // Asegúrate de usar 'require' para las imágenes locales
  const options = [
    { option: 'Perfil', image: require('../../assets/favicon.png') },
    { option: 'Reportar', image: require('../../assets/favicon.png') },
    { option: 'Estado del reporte', image: require('../../assets/favicon.png') },
    { option: 'Info', image: require('../../assets/favicon.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Sistema de Gestión Urbana</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ScrollView con Cards */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.scrollContainer}>
          <Text style={styles.title}>¡Bienvenido!</Text>
          <Text style={styles.description}>
            En esta ventana podrás realizar reportes urbanos. A continuación, puedes ver un listado de opciones o información más detallada.
          </Text>

          {/* Cards */}
          <View style={styles.cardContainer}>
            {options.map((item, index) => (
              <View key={index} style={styles.card}>
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.option}</Text>
                <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <TouchableOpacity
                  style={styles.cardButton}
                  onPress={() => handlePressOption(item.option)}
                >
                  <Text style={styles.cardButtonText}>Seleccionar</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondScreen;

