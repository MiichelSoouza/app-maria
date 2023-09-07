import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';

const mascot = require("../assets/mascot.png")

export default function CadastroScreen() {
  return (
    <View style={styles.container}>      
      <StatusBar style="light" />
      <View style={styles.circle}></View>
      <View style={styles.bigBox}>
      <View style={styles.box}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
    },

    circle:{
      backgroundColor: '#691030',
      width: 52,
      height: 52,
      borderRadius: 100,
      paddingLeft: 50
    },
    bigBox: {
      backgroundColor: '#691030',
      width: 322,
      height: 606
    },
    box:{
      form: {
        width: 32,
        height: 542,
        borderRadius: 25,
        backgroundColor: '#D9D9D9',
      },

    }
});
  