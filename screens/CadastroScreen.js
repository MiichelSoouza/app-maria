import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

const mascot = require("../assets/mascot.png")

export default function CadastroScreen() {
  return (
    <View style={styles.container}>      
      <StatusBar style="light" />
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 53,
      gap: 24,
    },
    circle:{
      backgroundColor: '#691030',
      width: 52,
      height: 52,
      borderRadius: 100
    },
    box: {
      backgroundColor: '#D9D9D9',
      width: 52,
      height: 52,
    }
});
  