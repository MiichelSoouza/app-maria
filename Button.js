import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Button(props) {
  const styles = StyleSheet.create({
    button:{
     backgroundColor: props.disabled ? 'lightgray' : "#691030",
     height:41,
     borderRadius:56,
     justifyContent:"center",
     alignItems:"center"
   },
   buttonText:{
     color:"#FFF",
     fontSize:16,
     fontWeight:"700",
   },
   shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
   }
 });
 
  return (
    <TouchableHighlight 
      style={
        props.disabled ? 
          styles.button : 
          [styles.button, styles.shadow]
      } 
      onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableHighlight>
  );
}


