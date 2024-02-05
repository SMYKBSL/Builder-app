import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const EmbeddedFacebookAlbum = ({ albumUrl }) => {
  return (
    <View style={styles.embeddedAlbumContainer}>
      <WebView
        source={{ uri: albumUrl }}
        allowsInlineMediaPlayback={true}
        mediaTypes={['all']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    embeddedAlbumContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 1,
    }
  });
  

export default EmbeddedFacebookAlbum;