import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Chapter1 from "./pages/advanced-react/chapter1";
import Chapter2 from "./pages/advanced-react/chapter2";
import Chapter3 from "./pages/advanced-react/chapter3";

import "./styles/app.css";
import { Another } from "./pages/advanced-react/another";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/another",
    element: <Another />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
