import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useState, useCallback } from 'react'

const logo = require("../assets/logo.png")
const mascot = require("../assets/mascot.png")

import Input from "../Input"
import Button from "../Button"

export default function LoginScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [valid, setValid] = useState(email !== '' && password !== '')

  const onSubmit = useCallback(() => {
    if (!valid) {
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: {
        email,
        password
      }
    })
      .then(() => {
        props.navigation.navigate('Home')
      })
      .catch((error) => {
        alert(error)
      })

  }, [props.navigation, email, password, valid])

  return (
    <View style={styles.container}>
        <Image source={logo} />  

        <Text style={styles.welcome}>BEM-VINDO</Text>

        <View style={styles.form}>
          <View style={styles.box}>  
              <View style={styles.inputs}>
                <Input label="E-MAIL" onChangeText={email => {
                  setEmail(email)
                  setValid(email !== '' && password !== "")
                }}/>

                <Input label="SENHA" onChangeText={password => {
                  setPassword(password)
                  setValid(email !== '' && password !== "")
                }}/>
              </View>
              
              <Button text="ENTRAR" onPress={onSubmit} disabled={!valid}/>
          </View>

          <TouchableHighlight style={styles.signInBox} onPress={() => {
            props.navigation.navigate('Cadastro')
          }}>
            <Text style={styles.signInText}>
            Não tem uma conta? {"\n"} Cadastre-se
            </Text>
          </TouchableHighlight>
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
  