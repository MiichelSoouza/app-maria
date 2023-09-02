import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Input from "./Input"
import Button from "./Button"

const logo = require("./assets/logo.png")
const mascot = require("./assets/mascot.png")

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} />  

      <Text style={styles.welcome}>BEM-VINDO</Text>

      <View style={styles.form}>
        <View style={styles.box}>  
          <View style={styles.inputs}>
            <Input label="E-MAIL"/>
            <Input label="SENHA"/>
          </View>
          
          <Button text="ENTRAR" />
        </View>

        <View style={styles.signInBox}>
          <Text style={styles.signInText}>
            Não tem uma conta? {"\n"} Cadastre-se
          </Text>
        </View>
      </View>

      <Image source={mascot} />

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
  
  welcome:{
    color: "#fff",
    fontSize: 31,
  },
  
  box:{
    backgroundColor:"#E4E2E2",
    padding:19,
    width: "100%",
    gap: 12
  },

  inputs: {
    marginBottom: 20,
    gap: 12
  },

  form: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: '#fff',
    overflow: 'hidden'
  },

  signInBox: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  signInText: {
    color: "#691030",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center"
  }
});
