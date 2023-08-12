import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import HomePage from "./views/HomePage";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import DetailPage from "./views/DetailPage";

function AppContent() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:name" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
