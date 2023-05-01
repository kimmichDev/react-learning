import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { categoryApi } from "./services/CategoryApi.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ApiProvider api={categoryApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
  // </React.StrictMode>
);
