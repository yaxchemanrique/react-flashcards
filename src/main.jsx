import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TopicProvider from "./contexts/TopicProvider.jsx";
import "./root.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopicProvider>
      <App />
    </TopicProvider>
  </StrictMode>
);
