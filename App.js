import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainScreen from './src/screens/MainScreen';
import SecondScreen from './src/screens/SecondScreen';
import DetalleReporteScreen from './src/screens/DetalleReporteScreen';
import EstadoSolicitudesScreen from './src/screens/EstadosSolicitudesScreen';
import MapaInteractivoScreen from './src/screens/MapaInteractivoScreen';
import ContactoAdminScreen from './src/screens/ContactoAdminScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }} // Oculta el header por defecto
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SecondScreen" 
          component={SecondScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="DetalleReporteScreen" 
          component={DetalleReporteScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="EstadoSolicitudesScreen" 
          component={EstadoSolicitudesScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen 
          name="MapaInteractivoScreen" 
          component={MapaInteractivoScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen 
          name="ContactoAdminScreen" 
          component={ContactoAdminScreen}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
