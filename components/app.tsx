import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Menu from './Menu';
import HeroSection from './HeroSection';
import WelcomeBlurb from './WelcomeBlurb';
import HistoryPage from './HistoryPage';
import EnquiryForm from './EnquiryForm';
import ContactPage from './ContactPage';

type Page = 'home' | 'history' | 'enquiry' | 'contact';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#34495e',
    surface: '#2c3e50',
    text: '#ecf0f1',
  },
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleMenuPress = (page: Page) => {
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
