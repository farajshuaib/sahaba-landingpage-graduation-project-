import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageContact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,

  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <PageContact />,
  },
]);
