import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Assessment from "./Assessment";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
      </Routes>
    </BrowserRouter>
  );
}