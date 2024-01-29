import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeBlurb = () => {
  return (
    <View style={styles.blurbContainer}>
      <Text style={styles.title}>Welcome to Brick & Build!</Text>
      <Text style={styles.description}>
        We're passionate about crafting beautiful and lasting brickwork for homes, businesses, and more. Since 2010, our team of experienced masons has been transforming visions into reality with dedication and precision. Whether it's a charming cottage renovation or a modern architectural masterpiece, we bring your dream projects to life, brick by brick.
      </Text>
      <Button title="Get a Free Quote" />
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
    lineHeight: 1.5,
    marginVertical: 10,
  },
});

export default WelcomeBlurb;
