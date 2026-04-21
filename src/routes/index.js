import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home'; 
import Info from '../screens/Info';
import Details from '../screens/Details';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={({ navigation }) => ({
                title: 'Produtos',
                headerLeft: () => (
                <TouchableOpacity 
                    onPress={() => navigation.replace('Login')}
                    style={{ marginLeft: 15 }}
                >
                    <Text style={{ color: 'red', fontWeight: 'bold', paddingRight: 95, }}>Sair</Text>
                </TouchableOpacity>
                ),
                headerRight: () => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Info')}
                    style={{ marginRight: 15 }}
                >
                    <Text style={{ color: '#007AFF' }}>Info</Text>
                </TouchableOpacity>
                ),
            })}
        />
        <Stack.Screen name="Details" component={Details} options={{ title: 'Detalhes' }} />
        <Stack.Screen name="Info" component={Info} options={{ title: 'Sobre o Grupo' }} />
    </Stack.Navigator>
  );
}