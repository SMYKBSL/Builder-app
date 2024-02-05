import { StyleSheet,Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '@/components/Themed';
import EmbeddedFacebookAlbum from '../../components/EmbeddedFacebookAlbum';
export default function TabThreeScreen() {
  const navigation = useNavigation();
  const albumUrl = 'https://www.facebook.com/embed/album/YOUR_ALBUM_ID/';

  return (
      <View style={styles.blurbContainer}>
        <Text style={styles.title}>Welcome to {`[Company Name]`}</Text>
        <Text style={styles.description}>
          Project list
        </Text>
        <Text style={styles.description}>
          load facebook library
        </Text>
        <View style={styles.albumContainer}>
        <EmbeddedFacebookAlbum albumUrl={albumUrl} />
      </View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  blurbContainer: {
    padding: 20,
    backgroundColor: "darkgrey",
    opacity: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
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
  albumContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 1,
  }
});
