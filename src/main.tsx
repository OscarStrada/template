import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root.tsx";
import Chapter1 from "./pages/chapter1.tsx";
import Chapter2 from "./pages/chapter2.tsx";
import Chapter3 from "./pages/chapter3.tsx";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/chapter-1",
    element: <Chapter1 />,
  },
  {
    path: "/chapter-2",
    element: <Chapter2 />,
  },
  {
    path: "/chapter-3",
    element: <Chapter3 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
