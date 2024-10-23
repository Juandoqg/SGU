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
  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  detailsCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'black', // Color de los bordes
    borderWidth: 1, // Ancho del borde
    borderRadius: 5, // Bordes redondeados
    paddingHorizontal: 10,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#b424b4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff', // Color del texto del botón Editar
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#b424b4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff', // Color del texto del botón Volver
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#4CAF50', // Color verde para el botón guardar
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff', // Color del texto del botón Guardar
    fontWeight: 'bold',
  },
  name: {
  fontSize: 20,
  fontWeight: 'bold', // Asegúrate de que este estilo esté presente
  marginVertical: 10,
  color: '#333', // Puedes cambiar el color si lo deseas
}
});

export default styles;
