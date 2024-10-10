import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MainScreen from './src/screens/MainScreen';
import SecondScreen from './src/screens/SecondScreen';
import PerfilScreen from './src/screens/PerfilScreen';
import EstadoReporteScreen from './src/screens/EstadoReporteScreen';
import ReportarScreen from './src/screens/ReportarScreen';
import InfoAdicionalScreen from './src/screens/InfoAdicionalScreen';
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
          name="PerfilScreen" 
          component={PerfilScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="ReportarScreen" 
          component={ReportarScreen}
          options={{ headerShown: false }}
        />
          <Stack.Screen 
          name="EstadoReporteScreen" 
          component={EstadoReporteScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name="InfoAdicionalScreen" 
          component={InfoAdicionalScreen}
          options={{ headerShown: false }}
        />
         
         
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
