// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/cordova";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ia9L6nmCUNyeEt0swKczZNF5B-v2Qig",
  authDomain: "thoth-e334d.firebaseapp.com",
  projectId: "thoth-e334d",
  storageBucket: "thoth-e334d.appspot.com",
  messagingSenderId: "749641722230",
  appId: "1:749641722230:web:4d180e35dfeb695ccff257",
  measurementId: "G-W7T6QFNHWR"
};

// Initialize Firebase
// If app is initialized use existing app, else initialize new app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Authentication Providers
const googleprovider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleprovider, githubProvider };
