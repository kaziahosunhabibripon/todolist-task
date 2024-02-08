import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    elementError: <Error />,
  },
]);

export default router;
