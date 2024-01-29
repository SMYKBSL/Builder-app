import { StyleSheet,Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View,  } from '@/components/Themed';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{
        uri: "https://source.unsplash.com/random?brick,bricklayer,builders",
      }}
      style={{ width: "100%", height: "100%", opacity: 1 }}
    >
      <View style={styles.blurbContainer}>
        <Text style={styles.title}>Welcome to {`[Company Name]`}</Text>
        <Text style={styles.description}>
          We're a passionate team of bricklayers and builders dedicated to
          crafting exceptional homes and structures. With over {`[Number]`}{" "}
          years of experience, we pride ourselves on{" "}
          {`[Highlight key qualities, e.g., precision, quality, reliability]`}
          workmanship and exceeding client expectations.
        </Text>
        <Text style={styles.description}>
          Co jeszcze? - projekty? - wsparcie? - wizytówka? - szczegóły projektu?
          - cennik? - kontakt? - wersja po polsku?
        </Text>
        <Pressable onPress={() => navigation.navigate("two")}>
          <Text style={styles.buttonText}>Get a Free Quote</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1.5,
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
    backgroundColor: "grey",
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
  }
});
