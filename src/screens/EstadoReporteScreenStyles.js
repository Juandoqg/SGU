

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
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  tipo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6200ea',
  },
  descripcion: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  fecha: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  ubicacion: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
});
  
  export default styles;