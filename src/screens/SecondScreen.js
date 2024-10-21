import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './SecondScreenStyles';

const SecondScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('MainScreen');
  };

  const handlePressOption = (screen) => {
    navigation.navigate(screen);
  };

  const PerfilCard = () => (
    <View style={styles.card}>
      <Icon name="user" size={30} color="#000" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Perfil</Text>
      <Text style={styles.cardText}>Gestiona tu perfil personal aquí.</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => handlePressOption('PerfilScreen')}>
        <Text style={styles.cardButtonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );

  const ReportarCard = () => (
    <View style={styles.card}>
      <Icon name="exclamation-circle" size={30} color="#000" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Reportar</Text>
      <Text style={styles.cardText}>Reporta un problema urbano aquí.</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => handlePressOption('ReportarScreen')}>
        <Text style={styles.cardButtonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );

  const EstadoReporteCard = () => (
    <View style={styles.card}>
      <Icon name="clipboard" size={30} color="#000" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Estado del Reporte</Text>
      <Text style={styles.cardText}>Consulta el estado de tus reportes.</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => handlePressOption('EstadoReporteScreen')}>
        <Text style={styles.cardButtonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );

  const InfoCard = () => (
    <View style={styles.card}>
      <Icon name="info-circle" size={30} color="#000" style={styles.cardIcon} />
      <Text style={styles.cardTitle}>Info</Text>
      <Text style={styles.cardText}>Información adicional sobre el sistema.</Text>
      <TouchableOpacity style={styles.cardButton} onPress={() => handlePressOption('InfoScreen')}>
        <Text style={styles.cardButtonText}>Seleccionar</Text>
      </TouchableOpacity>
    </View>
  );

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
            <PerfilCard />
            <ReportarCard />
            <EstadoReporteCard />
            <InfoCard />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondScreen;
