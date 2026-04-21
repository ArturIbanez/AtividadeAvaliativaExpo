import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes'; // Importa o arquivo de rotas que criamos

export default function App() {
  return (
    <NavigationContainer>
      {/* A StatusBar pode ficar aqui para ser aplicada em todo o app */}
      <StatusBar style="auto" />
      
      {/* O Routes renderiza o Stack.Navigator começando pela tela de Login */}
      <Routes />
    </NavigationContainer>
  );
}