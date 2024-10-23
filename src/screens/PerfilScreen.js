import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './PerfilScreenStyles';

const PerfilScreen = ({route}) => {
  const navigation = useNavigation();
  const {userData} = route.params
  const [name, setName] = useState(userData.displayName);
  const [email, setEmail] = useState(userData.email);
  const [document, setDocument] = useState(userData.document);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar la ventana flotante

  const handleBack = () => {
    navigation.goBack(); // Volver a la pantalla anterior
  };

  const handleEditProfile = () => {
    setIsEditing(true); // Abrir la ventana flotante
  };

  const handleSaveProfile = () => {
    // Aquí podrías agregar la lógica para guardar los cambios
    console.log('Perfil guardado:', { name, email, phone });
    setIsEditing(false); // Cerrar la ventana flotante
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Perfil de Usuario</Text>
      </View>

      {/* Tarjeta del perfil */}
      <View style={styles.profileCard}>
        <Icon name="user-circle" size={80} color="#b424b4" style={styles.profileIcon} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>Gestiona tu información personal aquí.</Text>
      </View>

      {/* Detalles del perfil */}
      <View style={styles.detailsCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nombre: </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Correo electrónico:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            editable={false}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Documento:</Text>
          <TextInput
            style={styles.input}
            value={document}
            onChangeText={setDocument}
            editable={false}
          />
        </View>

        {/* Botón para editar */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>

      {/* Botón Volver */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Volver</Text>
      </TouchableOpacity>

      {/* Modal para editar perfil */}
      <Modal
        transparent={true}
        visible={isEditing}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nombre:</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Correo electrónico:</Text>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Documento:</Text>
              <TextInput
                style={styles.input}
                value={document}
                onChangeText={setDocument}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backButton} onPress={() => setIsEditing(false)}>
                <Text style={styles.backButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default PerfilScreen;
