// libs
import { RouterProvider } from "react-router-dom";

// vercel speed insights
import { SpeedInsights } from "@vercel/speed-insights/next";

// styles
import "./App.css";

// routes config
import { router } from "@routes/index";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
