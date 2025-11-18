import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Searchbar, Card, Title, Paragraph, Chip } from 'react-native-paper';

const MOCK_PLANTS = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: '$45',
    seller: 'Green Thumb Nursery',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500',
    category: 'Indoor',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: '$25',
    seller: 'Urban Jungle',
    image: 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=500',
    category: 'Low Maintenance',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: '$65',
    seller: 'Plant Paradise',
    image: 'https://images.unsplash.com/photo-1607774786991-24c71fff4a03?w=8https://images.unsplash.com/photo-1607774786991-24c71fff4a0300',
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

