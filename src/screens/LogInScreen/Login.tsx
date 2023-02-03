import { View, Text, Image, StyleSheet, Switch, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  
  const onLogInPressed = () => {
    console.warn("Log in");
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };


  const onSignUpPressed = () => {
    console.warn('onSignUpPress');
  };

  return (
    <View>
      <ImageBackground source={require('../../../assets/images/picture.jpg')}
      style={styles.image}>
    <Text style={styles.text1}>Welcome to Log in Page</Text>
     <Text style={styles.text}>Lets you In</Text>
      <View style={styles.input1}>
      <CustomInput 
        placeholder="Email"
        value={email}
        setValue={setEmail} />
       </View>

      <View style={styles.input1}>
      <CustomInput 
        placeholder="Password"
        value={password}
        setValue={setPassword} 
        secureTextEntry={true} />
      </View>
        
      <View style={styles.forgotCheck}>
        <Switch style = {styles.checkbox}
          value={isSelected}
          onValueChange={setSelection}
          />
        <Text style={styles.checkbox}>Remember me</Text>
        <CustomButton 
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY" />
      </View>

      <View style={styles.login}>
        <CustomButton 
        text="Log In"
        type='PRIMARY'
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
  );
};

const styles = StyleSheet.create ({
    image: {
        height: 700,
        width: 400
      },
    text1: {
      fontSize: 30,
      color: 'white',
      marginLeft: 80,
      marginTop: 40
    },
    text: {
        fontSize: 25,
        marginTop: 40,
        color: 'white',
        marginLeft: 130
    },
    input1: {
      marginTop:30,
      marginLeft: 60,
    //   backgroundColor: '#85DFF',
      width: 280,
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 1,
    },
    forgotCheck: {
      marginTop: 30,
      flexDirection: 'row',
      marginLeft: 50
    },
    checkbox: {
      alignSelf: 'center',
      color: 'white',
      marginRight: 20,
      fontWeight: 'bold',
      height: 30
    },
    login: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signup: {
      marginTop: 100, 
      marginLeft: 110
    }

});
export default Login