import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, Title, Paragraph } from 'react-native-paper';

const MOCK_VENDORS = [
  {
    id: '1',
    name: 'Green Thumb Nursery',
    description: 'Specialty indoor plants',
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: '2',
    name: 'Urban Jungle',
    description: 'Rare plants & supplies',
    coordinate: {
      latitude: 37.78925,
      longitude: -122.4344,
    },
  },
];

export default function NearbyScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {MOCK_VENDORS.map((vendor) => (
          <Marker
            key={vendor.id}
            coordinate={vendor.coordinate}
            title={vendor.name}
            description={vendor.description}
          />
        ))}
      </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
  vendorList: {
    padding: 16,
  },
  vendorCard: {
    marginBottom: 8,
  },
});