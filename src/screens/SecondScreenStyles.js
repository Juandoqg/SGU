import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      padding: 16,
      backgroundColor: '#F8F8F8', // Color de fondo del contenedor
      borderWidth: 2,
      borderColor: '#FFFFFF', // Color del borde
      borderRadius: 10,
      shadowColor: '#000', // Sombra (opcional)
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5, // Para Android (opcional)
    },
    scrollContent: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      marginBottom: 8,
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'column',
    },
    button: {
      backgroundColor: '#007BFF',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
    },
  });
  export default styles;