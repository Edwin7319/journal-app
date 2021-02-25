import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDFX0dV1k0jP-wMjyPoSH7Wgi_MTkNoxk8",
    authDomain: "react-app-4b630.firebaseapp.com",
    projectId: "react-app-4b630",
    storageBucket: "react-app-4b630.appspot.com",
    messagingSenderId: "427781282094",
    appId: "1:427781282094:web:e528282c67f736ee21c2bf",
    measurementId: "G-Y4T70YXQLB"
};

firebase.initializeApp(FIREBASE_CONFIG);

const DATA_BASE = firebase.firestore;

const GOOGLE_AUTH_PROVIDER = new firebase.auth.GoogleAuthProvider();

export {
    DATA_BASE,
    GOOGLE_AUTH_PROVIDER,
    firebase,
}
