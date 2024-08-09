// firebaseUIConfig.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseui from "firebaseui";
import { auth } from "./firebaseConfig";

const uiConfig = {
  signInSuccessUrl: '/', // URL to redirect to after a successful sign-in
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // Add other providers as needed
  ],
  tosUrl: '<your-tos-url>', // Terms of service URL
  privacyPolicyUrl: '<your-privacy-policy-url>', // Privacy policy URL
};

const ui = new firebaseui.auth.AuthUI(auth);
export { ui, uiConfig };
