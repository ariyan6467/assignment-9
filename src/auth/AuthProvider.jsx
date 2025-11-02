import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[loading,SetLoading] =  useState(true);
  const [details,setDetails] = useState([]);

  // Register with email & password
  const handleRegister = (email, password) => {
    SetLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update profile (displayName + photoURL)
  const handleUpdateProfile = (user, profileData) => {
    
    return updateProfile(user, profileData); // returns a promise
  };

  // Sign in with Google
  const handleGoogleSignIn = () => {
     SetLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  function handleLogin(email, password) {
     SetLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function handleSignOut() {
    return signOut(auth);
  }

  function handleForgotPassword(email){
   return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       SetLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authData = {
    handleLogin,
    user,
    setUser,
    handleRegister,
    handleUpdateProfile,
    handleGoogleSignIn,
    handleSignOut,
    loading,SetLoading,
   details,setDetails,
   handleForgotPassword
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
