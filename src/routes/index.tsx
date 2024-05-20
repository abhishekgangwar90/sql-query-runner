import { createBrowserRouter } from "react-router-dom";

// Layout
import Layout from "@layout/index";

// routes
import Home from "@routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
