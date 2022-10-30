import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageContact from "./pages/Contact";
import Wrapper from "./Wrapper";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <PageContact />,
      },
      {
        path: "/terms-of-service",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
