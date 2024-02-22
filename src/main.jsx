import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster position="bottom-left" reverseOrder={false} />
  </React.StrictMode>
);
