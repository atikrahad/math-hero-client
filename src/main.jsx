import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.jsx";
import Authprovider from "./Router/Authprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </Provider>
  </React.StrictMode>
);
