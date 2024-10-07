// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen'; // Otra pantalla para demostrar

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} // Oculta el header por defecto
        />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen} 
          options={{ headerShown: false }} // Oculta el header por defecto
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
