import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Button(props) {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
   button:{
    backgroundColor:"#691030",
    height:41,
    borderRadius:56,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent:"center",
    alignItems:"center"
  },
  buttonText:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"700",
  }
  });
