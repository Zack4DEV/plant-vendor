import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, Card, Title, Paragraph, Chip } from 'react-native-paper';

const MOCK_PLANTS = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: '$45',
    seller: 'Green Thumb Nursery',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500',
    category: 'Indoor',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: '$25',
    seller: 'Urban Jungle',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7f76?w=500',
    category: 'Low Maintenance',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: '$65',
    seller: 'Plant Paradise',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a207517?w=500',
    category: 'Popular',
  },
];

export default function MarketplaceScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderPlantCard = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.seller}</Paragraph>
        <View style={styles.priceContainer}>
          <Chip icon="tag">{item.price}</Chip>
          <Chip icon="leaf">{item.category}</Chip>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search plants..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      <FlatList
        data={MOCK_PLANTS}
        renderItem={renderPlantCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchbar: {
    margin: 16,
    elevation: 4,
  },
  card: {
    margin: 8,
    elevation: 4,
  },
  listContainer: {
    padding: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});

