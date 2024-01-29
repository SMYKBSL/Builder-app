import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Menu = ({ onPress }) => {
  return (
    <View style={styles.menu}>
      <Button title="Home" onPress={() => onPress('home')} />
      <Button title="History" onPress={() => onPress('history')} />
      <Button title="Enquiry" onPress={() => onPress('enquiry')} />
      <Button title="Contact" onPress={() => onPress('contact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    // Style the menu as desired
  },
});

export default Menu;
