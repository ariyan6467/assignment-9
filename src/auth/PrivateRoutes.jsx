import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { h1 } from "framer-motion/client";

const PrivateRoutes = ({ children }) => {
  const { user,loading,SetLoading } = useContext(AuthContext);
 
  const location = useLocation();
  console.log(location);
  console.log(user);
 if(loading == true){
    return <h1>Loading Data......</h1>
 }
  if(user == null){
   
    return <Navigate state={location.pathname} to="/login"></Navigate>
  }else{
    return children;
  }
};

export default PrivateRoutes;
