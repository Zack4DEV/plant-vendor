import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';
import MapViewWrapper from '../components/ai/MapViewWrapper'; // adjust path as needed

const MOCK_VENDORS = [
  {
    id: '1',
    name: 'Green Thumb Nursery',
    description: 'Specialty indoor plants',
},
  {
    id: '2',
    name: 'Urban Jungle',
    description: 'Rare plants & supplies',
},
];

export default function NearbyScreen() {
  return (
    <View style={styles.container}>
      <MapViewWrapper />
      <View style={styles.vendorList}>
        {MOCK_VENDORS.map((vendor) => (
          <Card key={vendor.id} style={styles.vendorCard}>
            <Card.Content>
              <Title>{vendor.name}</Title>
              <Paragraph>{vendor.description}</Paragraph>
            </Card.Content>
          </Card>
))}
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
  vendorList: {
    padding: 16,
},
  vendorCard: {
    marginBottom: 8,
},
});