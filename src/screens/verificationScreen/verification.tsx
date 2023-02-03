import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const verification = () => {
  return (
    <View>
        <ImageBackground source={require('../../../assets/images/event.jpeg')}
      style={styles.image}>
        <Text style={styles.code}>OTP Code Verification</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 600,
        width: 400
    },
    code: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})
export default verification