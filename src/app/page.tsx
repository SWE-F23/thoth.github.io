"use client";
import { SignIn, SignUp } from "./login/components/login";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  const [isSignUp, setIsSignUp] = React.useState(false);
  if (isSignUp) {
    return (
      <main className="main">
        <div className="form">
          <SignUp />
          <Button
            variant="text"
            className="textinput"
            onClick={() => setIsSignUp(false)}
          >
            Sign In Instead!
          </Button>
        </div>
      </main>
    );
  } else {
    return (
      <main className="main">
        <div className="form">
          <SignIn />
          <Button
            variant="text"
            className="textinput"
            onClick={() => setIsSignUp(true)}
          >
            Sign Up Instead!
          </Button>
        </div>
      </main>
    );
  }
}
