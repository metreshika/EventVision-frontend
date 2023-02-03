import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const customInput = ({value, setValue, placeholder, secureTextEntry}: 
  {value: string, setValue: (text: string) => void, 
  placeholder: string, 
  secureTextEntry?: boolean}) => {
  return (
    <View style={styles.container}>
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            />
    </View>
  );
  };

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
    },
})

export default customInput