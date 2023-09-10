import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Input';


const mascot = require("../assets/mascot.png")

export default function CadastroScreen() {
  return (
    <View style={styles.container}>      
      <StatusBar style="light" />
      <View style={styles.circle}></View>      
        <View style={styles.box}>
           <View style={styles.inputs}>        
                <Input label="NOME" onChangeText={email => {
                  setEmail(email)
                  setValid(email !== '' && password !== "")
                }}/>
                <Input label="COMO QUER SER CHAMADO?" onChangeText={password => {
                  setPassword(password)
                  setValid(email !== '' && password !== "")
                }}/>
                <Input label="EMAIL" onChangeText={password => {
                  setPassword(password)
                  setValid(email !== '' && password !== "")
                }}/>
                <Input label="SENHA" onChangeText={password => {
                  setPassword(password)
                  setValid(email !== '' && password !== "")
                }}/>
                <Input label="CÓDIGO DE CONVITE ZAS" onChangeText={password => {
                  setPassword(password)
                  setValid(email !== '' && password !== "")
                }}/>                    
          </View>
      </View> 
        <Image source={mascot}/>

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
      backgroundColor:'$611030',
      width: 52,
      height: 52
    },
    box:{
      backgroundColor: '#D9D9D9',
      width: 300,
      height: 505,
      borderRadius: 36
    },
    inputs:{
      marginBottom: 20,
      gap: 20,
      padding: 25
    },
    signInBox: {
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center'
    },
   
});
  