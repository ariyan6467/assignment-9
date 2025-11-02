import React, { createContext, useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  updateProfile, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.config";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register with email & password
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update profile (displayName + photoURL)
  const handleUpdateProfile = (user, profileData) => {
    return updateProfile(user, profileData); // returns a promise
  };

  // Sign in with Google
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  function handleLogin(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authData = {
    handleLogin,
    user,
    setUser,
    handleRegister,
    handleUpdateProfile,
    handleGoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

