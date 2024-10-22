import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Picker, StyleSheet } from 'react-native';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../credenciales';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getAuth} from 'firebase/auth'; // Importar funciones de autenticación
// Configuración de Firestore
const db = getFirestore(appFirebase);

const auth = getAuth(appFirebase);

// Estilos del mapa
const containerStyle = {
  width: '100%',
  height: 400,
};

// Coordenadas de Buga, Valle del Cauca
const center = {
  lat: 3.9015, // Buga, Valle del Cauca
  lng: -76.1861,
};

const ReportarScreen = () => {
  const navigation = useNavigation();
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [tipo, setTipo] = useState('');
  const [fechaString, setFechaString] = useState(new Date().toLocaleDateString('es-CO')); // Fecha actual
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');

  // Manejar clic en el mapa para seleccionar la ubicación
  const onMapClick = (event) => {
    setSelectedPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  // Enviar el reporte a Firestore
  const handleReportar = async () => {
    if (tipo && fechaString && descripcion && selectedPosition) {
      try {
        // Almacenar el reporte en Firestore
        await addDoc(collection(db, 'reportes'), {
          tipo: tipo,
          fecha: fechaString,
          descripcion: descripcion,
          direccion: selectedPosition,
        });

        console.log('Reporte enviado:', { tipo, fecha: fechaString, descripcion, direccion: selectedPosition });
        navigation.goBack();
      } catch (err) {
        console.error('Error al enviar el reporte:', err);
        setError('Error al enviar el reporte. Intenta nuevamente.');
      }
    } else {
      setError('Todos los campos son obligatorios.');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}

          <Text>Tipo de incidente:</Text>
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

          <Text>Fecha: {fechaString}</Text> {/* Mostrar la fecha actual */}

          <TextInput
            style={styles.input}
            placeholder="Descripción del incidente"
            value={descripcion}
            onChangeText={setDescripcion}
          />

          {/* Mapa para seleccionar la ubicación */}
          <LoadScript googleMapsApiKey="AIzaSyCnbFMm2M_fYhtAM0YfsQh4p0AKs_Z0LRs">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center} // Usar coordenadas de Buga
              zoom={12}
              onClick={onMapClick}
            >
              {selectedPosition && <Marker position={selectedPosition} />}
            </GoogleMap>
          </LoadScript>

          {selectedPosition ? (
            <Text>Ubicación seleccionada: {`Lat: ${selectedPosition.lat}, Lng: ${selectedPosition.lng}`}</Text>
          ) : (
            <Text>Haz clic en el mapa para seleccionar una ubicación.</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleReportar}>
            <Text style={styles.buttonText}>Enviar Reporte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#b424b4', marginTop: 10 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ReportarScreen;
