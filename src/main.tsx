import { createRoot } from "react-dom/client";
import "./app/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
