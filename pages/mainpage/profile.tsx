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
import {toast} from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {
    const [authUser, setAuthUser] = useState(auth?.currentUser);
    const [userId, setUserId] = useState(authUser?.uid);
    const [isEmailUpdated, setIsEmailUpdated] = useState(false);
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
    const [isUserUpdated, setIsUserUpdated] = useState(false);
    const [isCityUpdated, setIsCityUpdated] = useState(false);
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
          if(error.message === "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."){
            toast.error("Email Already In Use");
            setIsEmailUpdated(false);
          }else if(error.message === "Firebase: Error (auth/requires-recent-login)."){
            toast.error("You must be logged in recently to update your email");
            setIsEmailUpdated(false);
          }else{
            alert(error.message);
            setIsEmailUpdated(false);
          }
        }); 
      }else{
        setIsEmailUpdated(false);
      }
      if(newpassword && authUser){
        updatePassword(authUser, newpassword).then(() => {
          // Update successful.
          setIsPasswordUpdated(true);
        }).catch((error) => {
          // An error ocurred
          // ...
          if(error.message === "Firebase: Error (auth/requires-recent-login)."){
            toast.error("You must be logged in recently to update your email");
            setIsEmailUpdated(false);}
          else if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            toast.error("Password should be at least 6 characters");
            setIsPasswordUpdated(false); 
          }else {
            alert(error.message);
          }
          setIsPasswordUpdated(false);
        });
      }else{
        setIsPasswordUpdated(false);
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
          setIsUserUpdated(false);
        });        
      }else{
        setIsUserUpdated(false);
      }
      if(isEmailUpdated){
        setEditMode(false);
        setIsEmailUpdated(false);
        setIsPasswordUpdated(false);
        setIsUserUpdated(false);
        toast.success("Email Updated Successfully");
      }
      if(isPasswordUpdated){
        setEditMode(false);
        setIsEmailUpdated(false);
        setIsPasswordUpdated(false);
        setIsUserUpdated(false);
        toast.success("Pssword Updated Successfully");
      }
      if(isUserUpdated){
        setEditMode(false);
        setIsEmailUpdated(false);
        setIsPasswordUpdated(false);
        setIsUserUpdated(false);
        toast.success("Username Updated Successfully");
      }
    }
  
    return (
      <div className="homepage">
        <ResponsiveAppBar />
        <ToastContainer
          position="top-center"
          autoClose={3500}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
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
