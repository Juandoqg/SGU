// src/components/Layout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomHeader from './CustomHeader';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default Layout;
