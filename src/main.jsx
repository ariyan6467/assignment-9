import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./Component/App.jsx";
import Home from "./Layout/Home.jsx";
import Hero from "./Component/Hero.jsx";
import HomePlants from "./Component/PlantSection/HomePlants.jsx";
import Login from "./Layout/Login.jsx";
import Register from "./Layout/Register.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import Profile from "./Layout/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home, // Layout component
    children: [
      {
        path: "/", // default child route
        Component: Hero,
      },
      {
        path: "", // nested route
        Component: HomePlants,
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/register",
        Component:Register
      },
      {
        path:"/profile",
        Component:Profile,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
 <RouterProvider router={router} />
  </AuthProvider>
    
 
  </StrictMode>
);
