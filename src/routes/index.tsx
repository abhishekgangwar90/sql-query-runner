import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "@layout/index";

// routes
import Home from "@routes/Home";
import AboutUs from "@routes/AboutUs";
import SQLQueryRunner from "./SQLQueryRunner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/query-runner",
    element: <SQLQueryRunner />,
  },
]);
