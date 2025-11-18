import React from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

export default function MapViewWeb() {
  return (
    <View style={styles.fallback}>
      <Text style={styles.text}>
        🌍 Map view is not available on web. Please use the mobile app to explore nearby vendors.
      </Text>
    </View>
);
}

const styles = StyleSheet.create({
  fallback: {
    height: Dimensions.get('window').height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
},
  text: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
},
});