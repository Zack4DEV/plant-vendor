import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { PlantIdentifier } from '../components/ai/PlantIdentifier';
import { PlantCareAssistant } from '../components/ai/PlantCareAssistant';
import { DiseaseDetector } from '../components/ai/DiseaseDetector';

export const AIAssistantScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>AI Plant Assistant</Text>
      <PlantIdentifier />
      <PlantCareAssistant />
      <DiseaseDetector />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#2E7D32',
  },
});