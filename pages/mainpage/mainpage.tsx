import { AppBar } from "@mui/material";
import ResponsiveAppBar from "./AppBar";
import Editor from "./editor";
import { auth } from "../firebase";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
    <>
      <h1> {user ? user.email : 'Not logged in'} </h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <AppBar />
    </>
  );
};
