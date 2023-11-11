import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home.jsx";
import About from "./Screens/About.jsx";

const router = createBrowserRouter([
  {
    path: "/Scratch-Final-Portfolio/",
    element: <App />,
    children: [
      {
        path: "/Scratch-Final-Portfolio/",
        element: <Home />,
      },
      {
        path: "/Scratch-Final-Portfolio/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
