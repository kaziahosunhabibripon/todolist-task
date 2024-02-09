import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/GlobalStyles.css";
import { Provider } from "react-redux";
import { store } from "./Redux/app/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
