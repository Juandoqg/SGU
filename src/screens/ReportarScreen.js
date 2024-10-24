import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker } from 'react-native-maps';  
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../credenciales';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import styles from './ReportarScreenStyles'; 

const db = getFirestore(appFirebase);

const initialRegion = {
  latitude: 3.90223,
  longitude: -76.29731,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const ReportarScreen = ({ route }) => {
  const { userData } = route.params;
  const navigation = useNavigation();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [tipo, setTipo] = useState('');
  const [fechaString, setFechaString] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  const onMapPress = (event) => {
    setSelectedPosition({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectedPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError('No se pudo obtener la ubicación. Verifica los permisos.');
        }
      );
    } else {
      setError('La geolocalización no es compatible con este navegador.');
    }
  };

  const handleReportar = async () => {
    if (tipo && fechaString && descripcion && selectedPosition) {
      try {
        await addDoc(collection(db, 'reportes'), {
          uid: userData.uid,
          displayName: userData.displayName,
          document: userData.document,
          email: userData.email,
          tipo: tipo,
          fecha: fechaString,
          descripcion: descripcion,
          direccion: selectedPosition,
        });

        const alertMessage = 'Tu reporte ha sido creado exitosamente.';
        const alertTitle = 'Reporte enviado';

        if (Platform.OS === 'web') {
          window.alert(alertMessage);
          navigation.goBack();
        } else {
          Alert.alert(alertTitle, alertMessage, [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ]);
        }
      } catch (err) {
        console.error('Error al enviar el reporte:', err);
        setError('Error al enviar el reporte. Intenta nuevamente.');
      }
    } else {
      setError('Todos los campos son obligatorios.');
    }
  };

  const obtenerFechaActual = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    setFechaString(obtenerFechaActual());
  }, []);

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.label}>Tipo de incidente:</Text>
                <Picker
                  selectedValue={tipo}
                  style={styles.input}
                  onValueChange={(itemValue) => setTipo(itemValue)}
                >
                  <Picker.Item label="Seleccionar tipo" value="" />
                  <Picker.Item label="Infraestructura" value="Infraestructura" />
                  <Picker.Item label="Seguridad" value="Seguridad" />
                  <Picker.Item label="Tráfico" value="Tráfico" />
                  <Picker.Item label="Basura" value="Basura" />
                  <Picker.Item label="Vandalismo" value="Vandalismo" />
                </Picker>
              </View>

              <View style={styles.column}>
                <Text style={styles.label}>Fecha:</Text>
                <TextInput
                  style={styles.input}
                  value={fechaString}
                  editable={false}
                />
              </View>
            </View>

            <MapView
              style={{ width: '100%', height: 500 }} 
              initialRegion={initialRegion}
              onPress={onMapPress}
            >
              {selectedPosition && (
                <Marker coordinate={selectedPosition} />
              )}
            </MapView>

            {selectedPosition ? (
              <Text style={{ marginBottom: 15 }}>
                Ubicación seleccionada: 
                <Text>{` Lat: ${selectedPosition.latitude}, Lng: ${selectedPosition.longitude}`}</Text>
              </Text>
            ) : (
              <Text style={{ marginBottom: 15 }}>Haz clic en el mapa para seleccionar una ubicación.</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Descripción del incidente"
              value={descripcion}
              onChangeText={setDescripcion}
              multiline={true}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.smallButton} onPress={getUserLocation}>
                <Text style={styles.buttonText}>Usar mi ubicación</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.smallButton} onPress={handleReportar}>
                <Text style={styles.buttonText}>Enviar Reporte</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default ReportarScreen;
