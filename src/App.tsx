// libs
import { RouterProvider } from "react-router-dom";

// styles
import "./App.css";

// routes config
import { router } from "@routes/index";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
