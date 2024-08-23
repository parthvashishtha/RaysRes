//For Routing below
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
