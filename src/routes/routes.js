import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "../pages/home";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <Home></Home>,
      },
      {
        path: "/Projects",
        element: <Project></Project>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
