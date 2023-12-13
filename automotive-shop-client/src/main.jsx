import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import myCreatedRoute from "./Routes/Routes";
import Authprovider from "./AuthProvider/Authprovider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <RouterProvider router={myCreatedRoute}></RouterProvider>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>
);
