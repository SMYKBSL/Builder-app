import { StyleSheet,Button } from 'react-native';

import { Text, View,  } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.blurbContainer}>
      <Text style={styles.title}>Welcome to {`[Company Name]`}</Text>
      <Text style={styles.description}>
        We're a passionate team of bricklayers and builders dedicated to crafting
        exceptional homes and structures. With over {`[Number]`} years of experience,
        we pride ourselves on {`[Highlight key qualities, e.g., precision, quality, reliability]`}
        workmanship and exceeding client expectations.
      </Text>
      <Text style={styles.description}>
        Co jeszcze?
        - projekty?
        - wsparcie?
        - wizytówka?
        - szczegóły projektu?
        - cennik?
        - kontakt?
        - wersja po polsku?
      </Text>
      <Button title="Get a Free Quote" onPress={() => {}} />
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
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 10,
  }
});
