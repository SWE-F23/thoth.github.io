"use client";
import React from "react";
import {auth, googleprovider, githubProvider} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  
  const SignUpAuth = () => {
    if(password === passwordConfirm){
      createUserWithEmailAndPassword(auth, email , password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        alert("Signed Up!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
    } else {
      alert("Passwords do not match");
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
