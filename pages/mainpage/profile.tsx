import ResponsiveAppBar from "./AppBar";
import { auth , database} from "../firebase";
import { onAuthStateChanged, signOut, updateEmail,updatePassword, UserProfile, verifyBeforeUpdateEmail} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import '../../src/app/globals.css';
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { updateProfile} from "firebase/auth";
import { getDatabase, ref, child, get, set } from "firebase/database";


export default function Profile() {
    const [authUser, setAuthUser] = useState(auth?.currentUser);
    const [userId, setUserId] = useState(authUser?.uid);
    const [isEmailUpdated, setIsEmailUpdated] = useState(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
    const [isUserUpdated, setIsUserUpdated] = useState(false);
    // const [isCityUpdated, setIsCityUpdated] = useState(false);
      
    useEffect(() => {
      const listen = onAuthStateChanged(auth,(user) => {
      if (user) {
        setAuthUser(user);
        setUserId(user.uid);
        console.log(user.email);
      } else{
         router.push('/');
      }
      })
    })

    const [newemail, setNewEmail] = React.useState<null | string>(null);
    const [newpassword, setNewPassword] = React.useState<null | string>(null);
    const [newuser, setNewUser] = React.useState<null | string>(null);
    const [newcity, setNewCity] = React.useState<null | string>(null);
    const [editMode, setEditMode] = useState(false);
    
    const router = useRouter();

    const handleToggleEditMode = () => {
      setEditMode(true);
    }

    const handleSave = () => {
      if(newemail && authUser){
        updateEmail(authUser, newemail).then(() => {
          // Email updated!
          // ...
          setIsEmailUpdated(true);
        }).catch((error) => {
          // An error occurred
          // ...
          alert(error.message);
        }); 
      }else{
        setIsEmailUpdated(true);
      }
      if(newpassword && authUser){
        updatePassword(authUser, newpassword).then(() => {
          // Update successful.
          setIsPasswordUpdated(true);
        }).catch((error) => {
          // An error ocurred
          // ...
          alert(error.message);
        });
      }else{
        setIsPasswordUpdated(true);
      }
      if(newuser && authUser){
        updateProfile(authUser, {
          displayName: newuser
        }).then(() => {
          // Profile updated!
          // ...
          setIsUserUpdated(true);
        }).catch((error) => {
          // An error occurred
          // ...
          alert(error.message);
        });        
      }else{
        setIsUserUpdated(true);
      }
      if(isEmailUpdated  && isPasswordUpdated && isUserUpdated){
        setEditMode(false);
        alert("Profile Updated Successfully!");
      }
    }
  
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
                  placeholder={authUser?.email ? authUser.email : "No Email"}
                  onChange = {(event) => setNewEmail(event.target.value)}  
                />
              </div>
              <div className="profile-content-size">
                <h2>Username</h2>
                <TextField 
                  className="profile-text-editors"
                  disabled={!editMode}
                  placeholder={authUser?.displayName ? authUser.displayName : "No Username"}
                  onChange = {(event) => setNewUser(event.target.value)}  
                />
              </div>
              <div className="profile-content-size"> 
                <h2>Password</h2>
                <TextField 
                  className="profile-text-editors"
                  placeholder="Type Your New Password"
                  type="password"
                  disabled={!editMode}
                  onChange = {(event) => setNewPassword(event.target.value)}  
                />
              </div>
              <div className="profile-content-size"> 
                <h2>City</h2>
                <TextField 
                  className="profile-text-editors"
                  placeholder="No City"
                  disabled={!editMode}
                  onChange = {(event) => setNewCity(event.target.value)}  
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
