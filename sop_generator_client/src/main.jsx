import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SopBuilder from "./Pages/SopBuilder/SopBuilder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SopBuilder></SopBuilder>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
