import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

type Enquiry = {
  name: string;
  email: string;
  projectDescription: string;
};

const EnquiryForm: React.FC = () => {
  const [enquiry, setEnquiry] = useState<Enquiry>({
    name: "",
    email: "",
    projectDescription: "",
  });

  const handleSubmit = () => {
    // Implement logic to submit enquiry form data (e.g., email, validate data)
    alert("Enquiry submitted successfully!");
    setEnquiry({ name: "", email: "", projectDescription: "" });
  };

  const handleChangeName = (name: string) => setEnquiry({ ...enquiry, name });
  const handleChangeEmail = (email: string) =>
    setEnquiry({ ...enquiry, email });
  const handleChangeProjectDescription = (description: string) =>
    setEnquiry({ ...enquiry, projectDescription: description });

  return (
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
      <Pressable onPress={() => {}}>
        <Text style={styles.buttonText}>Submit Enquiry</Text> 
      </Pressable>
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

export default EnquiryForm;
