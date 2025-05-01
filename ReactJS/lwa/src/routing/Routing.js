// Routing.js
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

// Layout component
function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About Us</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

// Pages
function Home() {
  return <h1>Hello World</h1>;
}

function About() {
  return <div>About</div>;
}

// Define router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

// Exported function to use in App.js
export default function Routing() {
  return <RouterProvider router={router} />;
}
