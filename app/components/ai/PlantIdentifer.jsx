import React, { useState } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { identifyPlant } from '../utils/ai/plantAIIdentifier';

export const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
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
      identifyPlantFromImage(result.assets[0].uri);
    }
  };

  const identifyPlantFromImage = async (imageUri) => {
    setLoading(true);
    try {
      const identification = await identifyPlant(imageUri);
      setResult(identification);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to identify plant. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Card style={styles.container}>
      <Card.Title title="Plant Identifier" subtitle="Upload a photo to identify your plant" />
      <Card.Content>
        {image && (
          <Image source={{ uri: image }} style={styles.image} />
        )}
        {loading ? (
          <ActivityIndicator size="large" color="#2E7D32" />
        ) : (
          <Button
            mode="contained"
            onPress={pickImage}
            style={styles.button}
          >
            Select Image
          </Button>
        )}
        {result && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Identification Results:</Text>
            <Text>{JSON.stringify(result, null, 2)}</Text>
          </View>
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
  resultContainer: {
    marginTop: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});