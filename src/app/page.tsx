"use client";
import { SignIn, SignUp } from "./login/components/login";
import Button from "@mui/material/Button";
import { set } from "firebase/database";
import React from "react";
import {auth, googleprovider, githubProvider} from './firebase'
import {signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth";
import { sign } from "crypto";
import App from "./mainpage";

export default function Home() {
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [isGitHover, setIsGitHover] = React.useState(false);
  const [isGoogleHover, setIsGoogleHover] = React.useState(false);

  const SignAuthGoogle = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      alert("Signed In!");
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
  
  const SignAuthGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // ...
      alert("Signed In!");
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

  return ( <App /> );

  /*if (isSignUp) {
    return (
      <main className="main">
        <form className="form">
          <div className="formtop">  
            <SignUp />
          </div>
          <div className="formmiddle">
            <Button
              variant="text"
              className="textinput"
              onClick={() => setIsSignUp(false)}
            >
              Sign In Instead!
            </Button>
          </div>
          <div className="formbottom">
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
          </div>
        </form>
      </main>
    );
  } else {
    return (
      <main className="main">
        <form className="form">
          <div className="formtop">  
              <SignIn />
          </div>
          <div className="formmiddle">
              <Button
                variant="text"
                className="textinput"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up Instead!
              </Button>
              <Button
                variant="text"
                className="textinput"
                onClick={() => setIsSignUp(false)}
              >
                Forgot Password?
              </Button>
          </div>
          <div className="formbottom">
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
          </div>
        </form>
      </main>
    );
  }*/
}
