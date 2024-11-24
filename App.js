import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './pantallas/Home';
import BuscadorScreen from './pantallas/Buscador';
import EscribirScreen from './pantallas/Escribir';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false, // This hides the labels

          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Asigna el nombre del archivo PNG según la ruta de la pestaña
            if (route.name === 'Home') {
              iconName = require('./icons/casa.png');
            } else if (route.name === 'Buscar') {
              iconName = require('./icons/busqueda.png');
            } else if (route.name === 'Publicar') {
              iconName = require('./icons/escribir.png');
            }

            // Retorna el componente Image con el ícono PNG
            return <Image source={iconName} style={{ width: 24, height: 24, tintColor: color }} />;
          },
          tabBarActiveTintColor: '#009688',
          tabBarInactiveTintColor: '#000',
          tabBarLabelStyle: {
            fontSize: 12, // Tamaño del texto de las etiquetas de las pestañas
          },
          tabBarIconStyle: {
            width: 28, // Ancho del ícono de las pestañas
            height: 28, // Alto del ícono de las pestañas
          },
          tabBarStyle: {
            height: 70, // Altura total del tab bar
            paddingBottom: 8, // Espacio adicional en la parte inferior si es necesario
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Buscar" component={BuscadorScreen} />
        <Tab.Screen name="Publicar" component={EscribirScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
