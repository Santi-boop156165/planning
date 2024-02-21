import React from "react";
import { Toaster } from "react-hot-toast";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GameContextProvider } from "./context/GameContextProvider.jsx";
import { GameContextCardProvider } from "./context/GameContextCardProvider.jsx";
import { GameContextPopupProvider } from "./context/GameContextPopupProvider.jsx";
import { GameContextPopupSecondaryProvider } from "./context/GameContextPopupSecondary.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <GameContextProvider>
      <GameContextCardProvider>
      < GameContextPopupProvider>
        <GameContextPopupSecondaryProvider>
        <App />
        </GameContextPopupSecondaryProvider>
        </GameContextPopupProvider>
      </GameContextCardProvider>
    </GameContextProvider>
  </BrowserRouter>
  <Toaster position="bottom-left" reverseOrder={false} />
</React.StrictMode>
);
