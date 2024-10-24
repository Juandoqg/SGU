import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Obtiene el ancho y la altura de la pantalla

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05, // El padding es el 5% del ancho de la pantalla para adaptarse
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  formContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    padding: width * 0.03, // El padding se ajusta al 3% del ancho de la pantalla
    backgroundColor: '#fff',
    fontSize: width * 0.04, // El tamaño de fuente es 4% del ancho de la pantalla
    marginBottom: 15,
    width: '100%', // Asegura que el input ocupe todo el ancho disponible
  },
  label: {
    fontSize: width * 0.045, // El tamaño de la etiqueta es 4.5% del ancho de la pantalla
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#495057',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  smallButton: {
    backgroundColor: '#17a2b8',
    padding: height * 0.02, // Padding ajustado al 2% de la altura de la pantalla
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  secondaryButton: {
    backgroundColor: '#6c757d',
    padding: height * 0.025, // Padding ajustado al 2.5% de la altura de la pantalla
    borderRadius: 8,
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.04, // Tamaño de la fuente ajustado al 4% del ancho de la pantalla
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  
});

export default styles;
