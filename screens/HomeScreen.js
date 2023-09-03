import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#691030',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 53,
      gap: 24,
    },
  });
  