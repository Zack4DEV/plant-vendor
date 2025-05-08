import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, TextInput, Button, Text, List } from 'react-native-paper';
import { getPlantCareInstructions } from '../../utils/ai/plantAICareInstructions';

export const PlantCareAssistant = () => {
  const [plantName, setPlantName] = useState('');
  const [careInstructions, setCareInstructions] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCareInstructions = async () => {
    if (!plantName.trim()) {
      alert('Please enter a plant name');
      return;
    }

    setLoading(true);
    try {
      const instructions = await getPlantCareInstructions(plantName);
      setCareInstructions(instructions);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get care instructions. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Card style={styles.container}>
      <Card.Title 
        title="Plant Care Assistant" 
        subtitle="Get AI-powered care instructions for your plants" 
      />
      <Card.Content>
        <TextInput
          label="Enter Plant Name"
          value={plantName}
          onChangeText={setPlantName}
          style={styles.input}
          mode="outlined"
        />
        <Button
          mode="contained"
          onPress={getCareInstructions}
          loading={loading}
          style={styles.button}
        >
          Get Care Instructions
        </Button>
        {careInstructions && (
          <ScrollView style={styles.instructionsContainer}>
            <List.Section>
              <List.Subheader>Care Instructions</List.Subheader>
              {Array.isArray(careInstructions) ? (
                careInstructions.map((instruction, index) => (
                  <List.Item
                    key={index}
                    title={instruction.title}
                    description={instruction.description}
                    left={props => <List.Icon {...props} icon="leaf" />}
                  />
                ))
              ) : (
                <Text>{JSON.stringify(careInstructions, null, 2)}</Text>
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
  input: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 16,
    backgroundColor: '#2E7D32',
  },
  instructionsContainer: {
    maxHeight: 300,
  },
});