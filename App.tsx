import React, { useState, useEffect } from 'react';
import LoginScreen from './View/LoginScreen';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase, { auth } from './firebase';
import MainApp from './View/MainApp';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  const [user, authLoading, authError] = useAuthState(auth);
  if (user) {
    const { email, displayName, photoURL, uid } = user;
    console.log(displayName);
    console.log(photoURL);
  }

  return <SafeAreaView>{!authLoading && !user ? <LoginScreen /> : <MainApp />}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
