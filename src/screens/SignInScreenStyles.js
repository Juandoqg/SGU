// src/screens/HomeScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5', // Fondo claro para toda la pantalla
  },
  formContainer: {
    width: '90%', // Ajusta el ancho para que no ocupe toda la pantalla
    maxWidth: 400, // Ancho máximo en pantallas grandes
    backgroundColor: '#fff', // Fondo blanco para el formulario
    padding: 20,
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  input: {
    height: 40,
    borderColor: '#ccc', // Color del borde más suave
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5, // Bordes redondeados para los inputs
  },
  button: {
    marginTop: 20,
    backgroundColor: '#b424b4', // Color morado del botón
    paddingVertical: 10,
    borderRadius: 5, // Bordes redondeados para los botones
  },
  buttonText: {
    color: '#fff', // Texto blanco en el botón
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    color: '#b424b4', // Color morado para el vínculo
    textAlign: 'center',
    textDecorationLine: 'underline', // Para que parezca un enlace
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  
});

export default styles;
