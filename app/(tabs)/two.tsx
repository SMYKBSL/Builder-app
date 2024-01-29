import { StyleSheet, TextInput, Button, ImageBackground, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

import React, { useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

type Enquiry = {
  name: string;
  email: string;
  projectDescription: string;
};

export default function TabTwoScreen() {
  const [enquiry, setEnquiry] = useState<Enquiry>({
    name: "",
    email: "",
    projectDescription: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://formspree.io/f/mjvngzql', enquiry);
      console.log('Form submission response:', response.data);
      console.log("Form submission response:", response);
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle error
    }
  }

  const handleChangeName = (name: string) => setEnquiry({ ...enquiry, name });
  const handleChangeEmail = (email: string) =>
    setEnquiry({ ...enquiry, email });
  const handleChangeProjectDescription = (description: string) =>
    setEnquiry({ ...enquiry, projectDescription: description });

  return (
    <ImageBackground
      source={{
        uri: "https://source.unsplash.com/random?bricklayer,builders,blackandwhite",
      }}
      style={{ width: "100%", height: "100%", opacity: 1 }}
    >
      <View style={styles.formContainer}>
        <Text style={styles.title}>Request a Free Quote</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={enquiry.name}
          onChangeText={handleChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={enquiry.email}
          onChangeText={handleChangeEmail}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Describe your project"
          multiline
          value={enquiry.projectDescription}
          onChangeText={handleChangeProjectDescription}
        />
        <Pressable onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Enquiry</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "darkgrey",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
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
