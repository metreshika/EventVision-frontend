import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Register = () => {
    const [email, setEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onLogInPressed = () => {
        console.warn("Sign Up");
      };

  function onSignUpPressed(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View>
      <ImageBackground source={require('../../../assets/images/event.jpeg')}
      style={styles.event}>
          <Text style={styles.text}>Sing Up</Text>
      <Text style={styles.text1}>its's free and always will be</Text>

      <View style={styles.input}>
      <CustomInput 
        placeholder="Email"
        value={email}
        setValue={setEmail} />
      </View>

      <View style={styles.input}>
      <CustomInput 
        placeholder="CreatePassword"
        value={createPassword}
        setValue={setCreatePassword} />
      </View>

      <View style={styles.input}>
      <CustomInput 
        placeholder="ConfirmPassword"
        value={confirmPassword}
        setValue={setConfirmPassword} />
      </View>

      <View style={styles.button}>
      <CustomButton 
        text="Sign Up"
        onPress={onLogInPressed} 
        style={{ height: 40, width: 180 }}/>
      </View>
       <View style = {styles.signup}>
        <Text style={{color: 'white'}} >Don't have an account? {''}
        <Text onPress={onSignUpPressed} style={{color: 'blue'}}>
        Sign Up
        </Text>
        </Text>
      </View>
      </ImageBackground>
    </View>
  )
}
const styles= StyleSheet.create({
    event: {
      width: 350,
      height: 690,
    },
    text: {
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 120
    },
    text1: {
      fontSize: 20,
      color: 'white',
      marginLeft: 50
  },
    input: {
        marginTop: 25,
        marginLeft: 40,
        backgroundColor: '#85DFF0',
        width: 280,
        borderColor: 'black',
        borderRadius: 20,
        borderWidth: 1,
    },
    button: {
        marginTop: 30,
        marginLeft: 90,
    },
    signup: {
      marginTop: 200,
    }
})

export default Register