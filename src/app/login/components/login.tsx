"use client";
import React from "react";
import {auth, googleprovider, githubProvider} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  
  const SignUpAuth = () => {
    // Still working or Regular Expression
    // Complete Regular Expression for password
    let regexp = new RegExp("");
    if(password === passwordConfirm){
      if(regexp.test(password)){
      createUserWithEmailAndPassword(auth, email , password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        toast.success(errorMessage);
      });
     }else{
      // toast.error("Password must be at least 8 characters long and contain at least one uppercase letter, one number and one special character !");
     }
    } else {
      toast.error("Passwords do not match !");
    }
  }

  return [
    <h1>Sign Up!</h1>,
    <TextField
      className="textinput"
      required
      label="Email Address"
      placeholder="Enter your email address"
      onChange={(event) => setEmail(event.target.value)}
    />,
    <TextField
      className="textinput"
      required
      label="Password"
      type="password"
      autoComplete="current-password"
      onChange = {(event) => setPassword(event.target.value)}  
    />,
    <TextField
      className="textinput"
      required
      label="Confirm Password"
      type="password"
      autoComplete="current-password"
      onChange = {(event) => setPasswordConfirm(event.target.value)}
    />,
    <Button variant="contained" className="textinput" onClick={SignUpAuth}>
      Sign Up
    </Button>
  ];
}


export function SignIn() {
  
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const SingInAuth = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert("Signed In!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return [
    <h1>Sign In!</h1>,
    <TextField
      className="textinput"
      required
      label="Email Address"
      placeholder="Enter your email address"
      onChange={(event) => setEmail(event.target.value)}
    />,
    <TextField
    className="textinput"
    required
    label="Password"
    type="password"
    autoComplete="current-password"
    onChange={(event) => setPassword(event.target.value)}
    />,
    <Button variant="contained" className="textinput" onClick={SingInAuth}>
    Sign In
    </Button>
  ];
}
