import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';  // Importa useNavigation
import appFirebase from '../../credenciales';
import styles from './EstadoReporteScreenStyles';
import Layout from '../components/Layout';

const EstadoReporteScreen = ({ route }) => {
  const { userData } = route.params;
  const [reportes, setReportes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();  // Hook para la navegación

  const getReportesDeUsuario = async (uid) => {
    const db = getFirestore(appFirebase);
    const reportesRef = collection(db, 'reportes');
    const q = query(reportesRef, where("uid", "==", uid));

    try {
      const querySnapshot = await getDocs(q);
      const reportes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return reportes;
    } catch (error) {
      console.error("Error al obtener los reportes:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchReportes = async () => {
      setLoading(true);
      try {
        const reportesUsuario = await getReportesDeUsuario(userData.uid);
        setReportes(reportesUsuario);
      } catch (err) {
        setError('No se pudieron cargar los reportes.');
      } finally {
        setLoading(false);
      }
    };

    fetchReportes();
  }, [userData.uid]);

  if (loading) {
    return <ActivityIndicator size="large" color="#6200ea" style={styles.loading} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <Layout>
      <View style={styles.container}>
        {/* Botón de Volver */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>

        <FlatList
          data={reportes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
              <Text style={styles.fecha}>{item.fecha}</Text>
              <Text style={styles.ubicacion}>
                {`Ubicación: Lat ${item.direccion.lat}, Lng ${item.direccion.lng}`}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </Layout>
  );
};

export default EstadoReporteScreen;
