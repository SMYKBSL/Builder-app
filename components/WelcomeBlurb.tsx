import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';

const WelcomeBlurb: React.FC = () => {
  return (
    <View style={styles.blurbContainer}>
      <Text style={styles.title}>Welcome to {`[Company Name]`}</Text>
      <Text style={styles.description}>
        We're a passionate team of bricklayers and builders dedicated to crafting
        exceptional homes and structures. With over {`[Number]`} years of experience,
        we pride ourselves on {`[Highlight key qualities, e.g., precision, quality, reliability]`}
        workmanship and exceeding client expectations.
      </Text>
      /<Button title="Get a Free Quote" onPress={() => {}} />
    </View>
  );
};


const styles = StyleSheet.create({
  blurbContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  },
});

export default WelcomeBlurb;
