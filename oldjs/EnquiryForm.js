import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = () => {
    // Implement logic to submit enquiry form data (e.g., email, validate data)
    alert('Enquiry submitted successfully!');
    setName('');
    setEmail('');
    setProjectDescription('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Request a Free Quote</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Describe your project"
        multiline
        value={projectDescription}
        onChangeText={setProjectDescription}
      />
      <Button title="Submit Enquiry" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    height: 150,
  },
});

export default EnquiryForm;
