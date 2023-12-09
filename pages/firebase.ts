// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
import { getDatabase } from "firebase/database";

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
  measurementId: "G-W7T6QFNHWR",
  databaseURL: "https://thoth-e334d-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
// If app is initialized use existing app, else initialize new app
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firebase Authentication Providers
const googleprovider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const database = getDatabase(app);

export { auth, googleprovider, githubProvider, database};

export default function exportDefault() {
  return (null);
 }