import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  ActivityIndicator, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import api from '../services/api';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterActive, setFilterActive] = useState('');

  const loadProducts = async (category = '') => {
    setLoading(true);
    try {
      const endpoint = category 
        ? `/products/category/${category}` 
        : '/products';
      const response = await api.get(endpoint);
      setProducts(response.data);
      setFilterActive(category);
    } catch (error) {
      console.error("Erro ao carregar produtos", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const catRes = await api.get('/products/categories');
        setCategories(catRes.data);
        await loadProducts();
      } catch (error) {
        console.error(error);
      }
    };
    loadInitialData();
  }, []);

  const formatPrice = (value) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => navigation.navigate('Details', { id: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.productPrice}>{formatPrice(item.price)}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={[styles.filterButton, !filterActive && styles.filterButtonActive]}
            onPress={() => loadProducts('')}
          >
            <Text style={styles.filterText}>Todos</Text>
          </TouchableOpacity>
          
          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat}
              style={[styles.filterButton, filterActive === cat && styles.filterButtonActive]}
              onPress={() => loadProducts(cat)}
            >
              <Text style={styles.filterText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          contentContainerStyle={styles.listContent}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  filterButtonActive: {
    backgroundColor: '#4CAF50',
  },
  filterText: {
    textTransform: 'capitalize',
  },
  listContent: {
    padding: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});