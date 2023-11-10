import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
defineCustomElements(window);

// if (process.env.NODE_ENV === "development") {
//   const { worker } = await import("./mocks/browser");
//   worker.start();
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
