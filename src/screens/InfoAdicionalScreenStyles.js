import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 30,
    },
    backButton: {
      backgroundColor: '#b424b4',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    backButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  export default styles;