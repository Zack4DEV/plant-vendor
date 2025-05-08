import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Text, List, ActivityIndicator } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { getDiseaseDetection } from '../utils/ai/plantAIDiseaseDetection';

export const DiseaseDetector = () => {
  const [image, setImage] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      detectDisease(result.assets[0].uri);
    }
  };

  const detectDisease = async (imageUri) => {
    setLoading(true);
    try {
      const result = await getDiseaseDetection(imageUri);
      setDiagnosis(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to detect plant disease. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Card style={styles.container}>
      <Card.Title 
        title="Plant Disease Detector" 
        subtitle="Upload a photo to check for plant diseases" 
      />
      <Card.Content>
        {image && (
          <Image source={{ uri: image }} style={styles.image} />
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#2E7D32" style={styles.loader} />
        ) : (
          <Button
            mode="contained"
            onPress={pickImage}
            style={styles.button}
          >
            Select Plant Image
          </Button>
        )}
        {diagnosis && (
          <ScrollView style={styles.diagnosisContainer}>
            <List.Section>
              <List.Subheader>Diagnosis Results</List.Subheader>
              {typeof diagnosis === 'object' ? (
                Object.entries(diagnosis).map(([key, value], index) => (
                  <List.Item
                    key={index}
                    title={key}
                    description={value}
                    left={props => <List.Icon {...props} icon="alert-circle" />}
                  />
                ))
              ) : (
                <Text>{diagnosis}</Text>
              )}
            </List.Section>
          </ScrollView>
        )}
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    marginVertical: 16,
    backgroundColor: '#2E7D32',
  },
  loader: {
    marginVertical: 16,
  },
  diagnosisContainer: {
    maxHeight: 300,
  },
});