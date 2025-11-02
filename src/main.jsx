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
import nav2 from "./nav2.jsx";
import Plants from "./Layout/Plants.jsx";
import PrivateRoutes from "./auth/PrivateRoutes.jsx";
import Details from "./Layout/Details.jsx";

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
       element:<PrivateRoutes>
        <Profile></Profile>
       </PrivateRoutes>
      },
      {
        path:"/plants",
       element:<PrivateRoutes>
     <Plants></Plants>
       </PrivateRoutes>,
        loader:()=> fetch("/public/PlantsData.json"),
      },
      {
        path:"/details",
      element:<PrivateRoutes>
          <Details></Details>
        </PrivateRoutes>
      }
    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
 <RouterProvider router={router} />
  </AuthProvider>
    
 
  </StrictMode>
);
