import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    elementError: <Error />,
  },
]);

export default router;
