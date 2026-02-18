import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/templatemo-glass-admin-style.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
