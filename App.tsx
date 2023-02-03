import React from 'react';
import {SafeAreaView, StyleSheet, Text,} from 'react-native';
import FirstPageScreen from './src/screens/firstPageScreen';
import Login from './src/screens/LogInScreen';
import Register from './src/screens/RegisterScreen';
import VerificationScreen from './src/screens/verificationScreen';

const App= () => {
  return (
    <SafeAreaView style={styles.root}>
      <Login/>
      {/* <Register/> */}
      {/* <FirstPageScreen/> */}
      <VerificationScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  }
});

export default App;
