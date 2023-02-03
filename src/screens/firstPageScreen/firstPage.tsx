import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';

const firstPage = () => {
    const onLogInPressed = () => {
        console.warn("Let's Start");
      };
    return (
    <View>
     <Image source={require('../../../assets/images/logo.png')}
      style={styles.logo}/>

    <Image source={require('../../../assets/images/wallpaper.png')}
      style={{
      height: 430,
      width: 300,
      marginTop: 20,
      }} />

    <Text style={styles.text}>"We do not remember the day.., but rather the moments"</Text>

    <View style = {styles.button} >
    <CustomButton 
        text="Let's Start"
        onPress={onLogInPressed} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 240,
        height: 50,
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 25
    },
    button: {
        marginTop: 20,
        paddingLeft: 60
    }
})
export default firstPage