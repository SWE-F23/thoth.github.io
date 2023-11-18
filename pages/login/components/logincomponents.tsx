"use client";
import React from "react";
import {auth, googleprovider, githubProvider} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from 'next/navigation';


export function GoogleLogin(){
  const router = useRouter();
  const [isGoogleHover, setIsGoogleHover] = React.useState(false);

  const SignAuthGoogle = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      router.push('./mainpage/mainpage');
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      alert(errorMessage);
    });
  }
  return (
    <img
      className= {isGoogleHover ? "onIcon" : "notOnIcon"}
      width= {40}
      height= 'auto'
      src={'../assets/google-color-icon.svg'}
      alt={"sign in with google"}
      onMouseEnter={() => setIsGoogleHover(true)}
      onMouseLeave={() => setIsGoogleHover(false)}
      onClick={SignAuthGoogle}
    />
  );
}  

export function GitHubLogin(){
  const router = useRouter();
  const [isGitHover, setIsGitHover] = React.useState(false);

  const SignAuthGitHub = () => {
    signInWithPopup(auth, githubProvider)
    .then((result) => {
      // ...
    router.push('./mainpage/mainpage');
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
  }
  
  return (
    <img
      className= {isGitHover ? "onIcon" : "notOnIcon"}
      width= {50}
      height= 'auto'
      src={'../assets/icone-github-bleu.png'}
      alt={"sign in with github"}
      onMouseEnter={() => setIsGitHover(true)}
      onMouseLeave={() => setIsGitHover(false)}
      onClick={SignAuthGitHub}
    />
  );
}   


export function SignUp(){
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const router = useRouter();
    
  const SignUpAuth = () => {
    if(password === passwordConfirm){
      createUserWithEmailAndPassword(auth, email , password)
      .then((userCredential) => {
        // Signed up 
        router.push('./mainpage/mainpage');
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
  const router = useRouter();
  
  const SingInAuth = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        router.push('./mainpage/mainpage');
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
