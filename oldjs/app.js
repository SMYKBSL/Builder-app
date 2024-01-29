import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Menu from './components/Menu';
import HeroSection from './components/HeroSection';
import WelcomeBlurb from './components/WelcomeBlurb';
import HistoryPage from './components/HistoryPage';
import EnquiryForm from './components/EnquiryForm';
import ContactPage from './components/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuPress = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <Menu onPress={handleMenuPress} />
      {currentPage === 'home' && <HeroSection />}
      {currentPage === 'home' && <WelcomeBlurb />}
      {currentPage === 'history' && <HistoryPage />}
      {currentPage === 'enquiry' && <EnquiryForm />}
      {currentPage === 'contact' && <ContactPage />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
