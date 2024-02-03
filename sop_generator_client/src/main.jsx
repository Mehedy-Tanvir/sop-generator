import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SopBuilder from "./Pages/SopBuilder/SopBuilder";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SopBuilder></SopBuilder>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
