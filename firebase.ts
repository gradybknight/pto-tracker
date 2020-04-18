import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import * as Google from "expo-google-app-auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbWOtoHdbH7bwWW2j4kBx3sIcfHXzTDXU",
  authDomain: "pto-tracker-c05c2.firebaseapp.com",
  databaseURL: "https://pto-tracker-c05c2.firebaseio.com",
  projectId: "pto-tracker-c05c2",
  storageBucket: "pto-tracker-c05c2.appspot.com",
  messagingSenderId: "927971473548",
  appId: "1:927971473548:web:c6ae65ce97338d1428e3a9",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const firebaseFunctions = firebase.functions();

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
