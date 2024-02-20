/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';

const ButtonComponenet =()=>{
    return(
        <View>
      
      
      <TouchableOpacity style={style.button}>
        <Text>Login</Text>
      </TouchableOpacity>
      
    </View>
    )
    
}
const style = StyleSheet.create({
  
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      margin: 20,
      padding: 10,
    },
    
  })

  export default ButtonComponenet;