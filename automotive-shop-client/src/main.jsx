import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Routes/Routes";
import AuthProvider from "./AuthProvider/AuthProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={myCreatedRoute}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>
);
