import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// custom package
import logger from "@/helpers/logger.js";

if (logger.isDebug) {
  logger.debug("Debug mode: ON");
} else {
  logger.debug("Debug mode: OFF");
}

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
);
