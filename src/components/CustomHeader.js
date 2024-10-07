// src/components/CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mi Aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
