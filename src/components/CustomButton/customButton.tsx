import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, style }: 
{ onPress: () => void, text: string, type?: "PRIMARY" | "TERTIARY", bgColor?: string, fgColor?: string, style?: any }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`], bgColor ? { backgroundColor: bgColor } : {}, style]}
    >
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 20,
  },
  container_PRIMARY: {
    backgroundColor: 'blue',
    justifyContent: 'center'
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  }
})

export default CustomButton