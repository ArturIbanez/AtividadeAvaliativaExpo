import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Info() {
  const integrantes = [
    { nome: "Artur Ibañez", ra: "1137674" },
    { nome: "Tino Navarro", ra: "1138129" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Desenvolvedores do App</Text>
      <Text style={styles.description}>
        Este aplicativo foi desenvolvido como parte do trabalho de React Native, 
        focando no EXPO, consumo de APIs REST e navegação mobile.
      </Text>

      {integrantes.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{item.nome}</Text>
          <Text style={styles.ra}>RA: {item.ra}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', marginBottom: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
    elevation: 2 
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  ra: { fontSize: 14, color: '#555' },
});