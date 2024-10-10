import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    backgroundColor: '#b424b4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuir espacio entre el texto y el botón
    alignItems: 'center',
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignSelf: 'center',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  scrollContent: {
    paddingBottom: 20, // Para evitar que el contenido se pegue al fondo
    paddingTop: 10, // Para añadir espacio arriba
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#777',
    textAlign: 'left',
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  optionButton: {
    backgroundColor: '#b424b4', // Color del botón
    paddingVertical: 10, // Padding vertical
    paddingHorizontal: 15, // Padding horizontal
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Espaciado entre botones
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 16, // Tamaño de fuente más grande
    fontWeight: 'bold',
    textAlign: 'center', // Centra el texto en el botón
  },
  logoutButton: {
    backgroundColor: '#b424b4',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#b424b4', // Color del botón
    paddingVertical: 3, // Menor padding vertical
    paddingHorizontal: 8, // Menor padding horizontal
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Espaciado superior
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12, // Tamaño de fuente más pequeño
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});


  export default styles;