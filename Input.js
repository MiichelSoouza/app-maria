import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input(props) {
  return (
    <View>
          <Text style={styles.inputLabel}>{props.label}</Text>
          <TextInput style={styles.input}/>
    </View>
  );
}
const styles = StyleSheet.create({
  input:{
    width:"100%",
    backgroundColor:"#FFF",
    borderRadius:9,
    height:41,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal:8,
  },
  inputLabel:{
    color:"#691030",
    fontSize:16,
    fontWeight:"700",
    marginBottom:4,
  }
  });
