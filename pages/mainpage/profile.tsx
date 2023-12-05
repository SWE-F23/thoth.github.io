import ResponsiveAppBar from "./AppBar";
import { auth , database} from "../firebase";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { set } from "firebase/database";


export default function Profile() {
    const [user, setUser] = useState(auth.currentUser);

    const [editMode, setEditMode] = useState(false);
    
    const router = useRouter();

    const handleToggleEditMode = () => {
      setEditMode(true);
    }
    
    const handleSave = () => {
      setEditMode(false);
    }

    const listen = auth.onAuthStateChanged((user) => {    // This function will be called whenever the authentication state changes
        // Check user on the client side
        if (!user) {
          // Redirect to login page if user is not logged in
          router.push('/');
        }
    });
  
    return (
      <div className="homepage">
        <ResponsiveAppBar />
        <div className="profile">
          <div className="top-profile"></div>
          <div className="profile-content"> 
              <div className="profile-pic"></div>
              <div className="profile-content-size"> 
                <h2>Email Address</h2>
                <TextField 
                  className="profile-text-editors"
                  disabled={!editMode}
                  defaultValue={user?.email}
                />
              </div>
              <div className="profile-content-size">
                <h2>Username</h2>
                <TextField 
                  className="profile-text-editors"
                  label="No Username"
                  disabled={!editMode}
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="profile-content-size"> 
                <h2>Password</h2>
                <TextField 
                  className="profile-text-editors"
                  label="Change Password"
                  disabled={!editMode}
                />
              </div>
              <div className="profile-content-size"> 
                <h2>City</h2>
                <TextField 
                  className="profile-text-editors"
                  label="No City"
                  disabled={!editMode}
                />
              </div>
              <div className="profile-content-size"> 
                <Button onClick={handleToggleEditMode}>Edit</Button>
                <Button onClick={handleSave}>Save</Button>
              </div>
          </div>
        </div>
      </div>
    );
};
