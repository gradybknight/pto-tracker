import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
// import { signInWithGoogle } from "./firebase";

import firebase from "firebase/app";
import "firebase/auth";

export default function App() {
  useEffect(() => {
    firebase.initializeApp({
      apiKey: "AIzaSyCbWOtoHdbH7bwWW2j4kBx3sIcfHXzTDXU",
      authDomain: "pto-tracker-c05c2.firebaseapp.com",
      databaseURL: "https://pto-tracker-c05c2.firebaseio.com",
      projectId: "pto-tracker-c05c2",
      storageBucket: "pto-tracker-c05c2.appspot.com",
      messagingSenderId: "927971473548",
      appId: "1:927971473548:web:c6ae65ce97338d1428e3a9",
    });

    // const firestore = firebase.firestore();
    // const firebaseFunctions = firebase.functions();

    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((cred) => {
        console.log(JSON.stringify(cred));
      })
      .catch((reason) => {
        console.error(reason);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Auth this thing</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 36,
    color: "white",
    backgroundColor: "purple",
  },
  buttonText: {
    fontSize: 36,
    color: "white",
  },
});
