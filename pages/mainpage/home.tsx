import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import Editor from "./editor";
import { auth } from "../firebase";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import Road from './test2'
import Test from './test'

export default function MainPage() {
  const [user, setUser] = useState(auth.currentUser);

  const router = useRouter();

  const listen = auth.onAuthStateChanged((user) => {    // This function will be called whenever the authentication state changes
      setUser(user);
      // Check user on the client side
      if (!user) {
        // Redirect to login page if user is not logged in
        router.push('/');
      }
  });

  return (
    <div className="homepage">
      <ResponsiveAppBar />
      <div className="mainpage-lessons">
        <div className="lesson-content-layout">
          <Test />
        </div>
        <div className="code-editor-container">
          <Editor />
        </div>
      </div>
    </div>
  );
};
