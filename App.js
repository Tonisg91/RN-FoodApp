import React from 'react';
import { enableScreens } from 'react-native-screens'
import { HomeScreen, RecipeScreen, ProfileScreen } from './src/screens'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

enableScreens()
const { Navigator, Screen } = createDrawerNavigator()
//git test
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Inicio" component={HomeScreen} />
        <Screen name="Mis Recetas" component={RecipeScreen} />
        <Screen name="Mi Perfil" component={ProfileScreen} />
      </Navigator>
    </NavigationContainer>
  );
}