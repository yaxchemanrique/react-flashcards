import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TopicProvider from "./contexts/TopicProvider.jsx";
import QuestionNumberProvider from "./contexts/QuestionNumberProvider.jsx";
import "./root.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuestionNumberProvider>
      <TopicProvider>
        <App />
      </TopicProvider>
    </QuestionNumberProvider>
  </StrictMode>
);
