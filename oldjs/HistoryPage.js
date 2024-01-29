import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const HistoryPage = () => {
  const projects = [
    {
      title: 'Modern Farmhouse Renovation',
      description: 'Breathed new life into a charming farmhouse with custom brickwork and expansive windows.',
      image: 'https://picsum.photos/300/200?random=1', // Replace with relevant image
    },
    {
      title: 'Commercial Brick Facade',
      description: 'Crafted a stunning brick facade for a local coffee shop, adding warmth and character.',
      image: 'https://picsum.photos/300/200?random=2', // Replace with relevant image
    },
    // Add more project objects here
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Our Story in Bricks</Text>
      {projects.map((project) => (
        <View key={project.title} style={styles.projectCard}>
          <Image source={{ uri: project.image }} style={styles.projectImage} />
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  projectCard: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  projectImage: {
    width: '100%',
    height: 150,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  projectDescription: {
    lineHeight: 1.5,
  },
});

export default HistoryPage;
