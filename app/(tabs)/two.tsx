import { StyleSheet, TextInput, ImageBackground, Pressable, Linking } from 'react-native';
import { Text, View } from '@/components/Themed';

import { Image } from 'react-native';

import React, { useState } from 'react';

import axios from 'axios';

import facebookIcon from '../../assets/images/Facebook_Logo_2023.png';
import youtubeIcon from '../../assets/images/Facebook_Logo_2023.png';

interface ContactLinkProps {
  name: string;
  url: string;
  icon: Image.URISourcePropType;
}



const ContactLink: React.FC<ContactLinkProps> = ({ name, url, icon }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <Pressable style={styles.contactLinkCell} onPress={handlePress}>
      <View style={styles.contactLinkIconContainer}>
        <Image source={icon} style={styles.contactLinkIcon} />
      </View>
      <Text style={styles.contactLinkText}>{name}</Text>
    </Pressable>
  );
};

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
        
        <View style={styles.contactLinksTable}>
          <View style={styles.contactLinksTableRow}>
            <View style={styles.contactLinkCell}>
              <ContactLink
                name="Facebook"
                url="https://www.facebook.com"
                icon={facebookIcon}
              />
              </View>
            <View style={styles.contactLinkCell}>
            <ContactLink
              name="YouTube"
              url="https://www.youtube.com"
              icon={youtubeIcon}
            />
            </View>
          </View>
        {/* Add more rows as needed */}
      </View>
      </View>


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
  },
  contactLinkContainer: {
    
  },
  contactLinkText: {
    
  },
  contactLinkIcon:{
    height: '10%',
    width: '10%',
  },
  contactLinksTable:{
    marginTop: 20,
    padding: 20,
    backgroundColor: "darkgrey",
    opacity: 1,
  },
  contactLinksTableRow:{
    flexDirection: 'row',
    justifyContent:'space-between',
    padding: 10,
  },
  contactLinkCell:{
    flex: 1,
    padding: 10,
    backgroundColor: "darkgrey",
    alignItems: 'center',
    opacity: 1,
  },
  contactLinkIconContainer:{
    flex: 1,
    padding: 10,
    backgroundColor: "darkgrey",
    opacity: 1,
  }
});
