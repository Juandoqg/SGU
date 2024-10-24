import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tipo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#6200ea',
    marginBottom: 8,
  },
  descripcion: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  fecha: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  ubicacion: {
    fontSize: 14,
    color: '#888',
  },
  // Estilo del botón "Volver"
  backButton: {
    backgroundColor: '#b424b4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,  // Espaciado debajo del botón
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
