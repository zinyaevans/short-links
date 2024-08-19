import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Route page</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
