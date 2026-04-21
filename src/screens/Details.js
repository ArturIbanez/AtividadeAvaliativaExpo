import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator 
} from 'react-native';
import api from '../services/api';

export default function Details({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Erro ao carregar detalhes", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const formatPrice = (value) => {
    return value ? `R$ ${value.toFixed(2).replace('.', ',')}` : '';
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{formatPrice(product.price)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 300, resizeMode: 'contain', marginTop: 20 },
  infoContainer: { padding: 20 },
  category: { fontSize: 14, color: '#888', textTransform: 'uppercase', marginBottom: 5 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 20, color: '#4CAF50', fontWeight: 'bold', marginBottom: 15 },
  description: { fontSize: 16, color: '#444', lineHeight: 24 },
});