/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonComponenet from './src/components/Button';
const TextInputExample = () => {
  

  return (
    <View style={styless.centered}>
      
      <TextInput
        style={styles.input}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
      />
      <Text>forgot password</Text>
      <ButtonComponenet/>

    </View>
    
  );
};
const styless = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
// const style = StyleSheet.create({
  
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     margin: 20,
//     padding: 10,
//   },
  
const styles = StyleSheet.create({
  input: {
    height: 40,
    width:200,
    margin: 20,
    borderWidth: 1,
    padding: 10,
  },
});


export default TextInputExample;