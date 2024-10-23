import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Picker , Alert ,Platform } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../credenciales';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './ReportarScreenStyles'; // Importamos los estilos


// Configuración de Firestore
const db = getFirestore(appFirebase);

// Estilos del mapa
const containerStyle = {
  width: '100%',
  height: 500, // Aumenta la altura del mapa
};

// Coordenadas iniciales de Buga, Valle del Cauca
const center = {
  lat: 3.90223,
  lng: -76.29731,
};

const ReportarScreen = ({route}) => {

  const {userData} = route.params
  const navigation = useNavigation();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [tipo, setTipo] = useState('');
  const [fechaString, setFechaString] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  // Manejar clic en el mapa para seleccionar la ubicación
  const onMapClick = (event) => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  // Obtener la ubicación del usuario usando la API de geolocalización del navegador
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setSelectedPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
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
        // Almacenar el reporte en Firestore
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
  
         // Mostrar alerta de éxito
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
  // Obtener la fecha actual en formato dd/mm/yyyy
  const obtenerFechaActual = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses son de 0-11
    const year = currentDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  
  React.useEffect(() => {
    setFechaString(obtenerFechaActual());
  }, []);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}

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

          {/* Mapa para seleccionar la ubicación */}
          <LoadScript googleMapsApiKey="AIzaSyCnbFMm2M_fYhtAM0YfsQh4p0AKs_Z0LRs">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={selectedPosition || center}
              zoom={12}
              onClick={onMapClick}
            >
              {selectedPosition && <Marker position={selectedPosition} />}
            </GoogleMap>
          </LoadScript>

          {selectedPosition ? (
            <Text style={{ marginBottom: 15 }}>Ubicación seleccionada: {`Lat: ${selectedPosition.lat}, Lng: ${selectedPosition.lng}`}</Text>
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
    </Layout>
  );
};

export default ReportarScreen;
