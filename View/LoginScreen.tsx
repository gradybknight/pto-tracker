import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native';
import { signInWithGoogleWeb } from '../firebase';

const handleLoginPress = () => {
  if (Platform.OS === 'web') {
    signInWithGoogleWeb();
  }
};
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'purple',
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 36,
    color: 'white',
  },
});
