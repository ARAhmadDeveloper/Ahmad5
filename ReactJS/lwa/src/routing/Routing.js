// Routing.js
import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from "../pages/login/Login";
import Demo from "../pages/demo/Demo";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
]);

// Exported function to use in App.js
export default function Routing() {
  return <RouterProvider router={router} />;
}
