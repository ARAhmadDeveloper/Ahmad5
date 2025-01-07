import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"

const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
            path: "contact",
            element: <Contact />
        },
      ],
 );
  
  export default function App() {
    return <RouterProvider router={router} />;
  }





