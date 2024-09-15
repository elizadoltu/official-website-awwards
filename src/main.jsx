import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <Router>
    <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>

  </StrictMode>
);
