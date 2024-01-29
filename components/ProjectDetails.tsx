import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';

type Project = {
  title: string;
  description: string;
  images: string[]; // Replace with appropriate type based on image source
  // Add any other relevant project details properties
};

const ProjectDetails: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleImageChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImage((currentImage + 1) % project.images.length);
    } else if (direction === "prev") {
      setCurrentImage(
        (currentImage - 1 + project.images.length) % project.images.length
      );
    }
  };

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{project.title}</Text>
      <Image
        source={{ uri: project.images[currentImage] }}
        style={styles.projectImage}
      />
      <View style={styles.imageNavigation}>
        <Pressable onPress={() => handleImageChange("prev")}
          disabled={currentImage === 0}>
          <Text style={styles.buttonText}>Previous</Text> 
        </Pressable>
        <Pressable onPress={() => handleImageChange("next")}
          disabled={currentImage === 0}>
          <Text style={styles.buttonText}>Next</Text> 
        </Pressable>
        <Text style={styles.imageCounter}>{`${currentImage + 1} / ${
          project.images.length
        }`}</Text>
      </View>
      <ScrollView style={styles.descriptionContainer}>
        <Text>{project.description}</Text>
        {/* Add additional details sections like features, specifications, etc. */}
      </ScrollView>
      <Pressable onPress={() => {}}>
      <Text style={styles.buttonText}>Close</Text> 
    </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    projectImage: {
        width: '100%',
        height: 250,
        marginBottom: 20,
    },
    imageNavigation: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    imageCounter: {
        fontSize: 14,
    },
    descriptionContainer: {
        flex: 1,
        marginBottom: 20,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    buttonText: {
      fontSize: 16,
      lineHeight: 22,
      marginVertical: 10,
      color: "white",
      backgroundColor: "black",
      padding: 10,
      borderRadius: 10,
    }
});

export default ProjectDetails;
