import * as functions from "firebase-functions";
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const newUserSignIn = functions.auth.user().onCreate((user) => {
  firestore.collection("users").doc(user.uid).set({
    displayName: user.displayName,
    email: user.email,
    isRecognized: false,
    isAdmin: false,
  });
});
