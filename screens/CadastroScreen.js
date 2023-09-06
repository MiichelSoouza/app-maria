import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';


export default function  CadastroScreen() {
  return (
    <View style={styles.container}>
        <Text>Cadastro</Text>
        <StatusBar style="light" />
        <View style={styles.box}>
        <View style={styles.boxInfo}></View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center'
    },
    box: {
      backgroundColor: '#691030',
      borderRadius: 32,
      height: 606,
      width: 322,
      padding: 46
    },
    boxInfo:{
      backgroundColor:"#E4E2E2",
      padding:19,
      width: "100%",
     
    }
});
  