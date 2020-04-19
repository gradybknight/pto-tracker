import React from 'react';
import LoginScreen from './View/LoginScreen';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase, { auth } from './firebase';
import MainApp from './View/MainApp';

export default function App() {
  const [user, authLoading, authError] = useAuthState(auth);
  if (user) {
    const { email, displayName, photoURL, uid } = user;
    console.log(displayName);
    console.log(photoURL);
  }

  return <>{!authLoading && !user ? <LoginScreen /> : <MainApp />}</>;
}
