import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import ProjectDetails from "./ProjectDetails";

import { TouchableOpacity } from "react-native";

type Project = {
  title: string;
  description: string;
  image: any; // Replace with appropriate type based on image source
};

const projects: Project[] = [
  {
    title: 'Modern Farmhouse Renovation',
    description: 'Breathtaking transformation of a classic farmhouse into a contemporary dream home.',
    image: require('../assets/images/project1.jpg'), // Replace with actual image
  },
  // Add more project objects with titles, descriptions, and image sources
];

const HistoryPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectPress = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our History of Excellence</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <ProjectCard
            project={item}
            onPress={(project: Project) => handleProjectPress(project)}
          />
        )}
        keyExtractor={(item) => item.title}
      />
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </View>
  );
};

const ProjectCard: React.FC<{ project: Project; onPress: () => void }> = ({ project, onPress }) => (
  <TouchableOpacity style={styles.projectCard} onPress={onPress}>
    <Image source={project.image} style={styles.projectImage} />
    <Text style={styles.projectTitle}>{project.title}</Text>
    <Text style={styles.projectDescription}>{project.description.slice(0, 50)}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  projectCard: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: 150,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  projectDescription: {
    fontSize: 14,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  }

});

export default HistoryPage;
