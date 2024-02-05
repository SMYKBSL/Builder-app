import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

interface Photo {
  id: string;
  image: string;
  caption: string;
}

export default function FacebookPhotoFeed() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Fetch photos
    const fetchedPhotos = //...
    setPhotos(fetchedPhotos);
  }, []);

  return (
    <ScrollView>
      {photos.map(photo => (
        <View key={photo.id} style={styles.container}>
          <Image 
            style={styles.image}
            source={{uri: photo.image}}
          />
          <Text style={styles.caption}>
            {photo.caption}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10    
  },
  image: {
    width: '100%',
    height: 200
  },
  caption: {
    fontSize: 18  
  }
});
