import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion de framer-motion
import HomePage from "./views/HomePage";
import Navbar from "./components/navbar/Navbar";
import Pokesearch from "./components/inputs/Pokesearch";
import "./App.css";
import DetailPage from "./views/DetailPage";
import pokeballImage from "./img/pokeball.png"; // Importa la imagen de la Pokéball
import { Link } from "react-router-dom";

function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="sticky top-0 z-50 flex items-center m-auto">
        <motion.div
          className="relative w-16 h-16"
          initial={{ scale: 0.8, rotate: 0 }} // Estado inicial
          animate={{ scale: 1, rotate: 360 }} // Estado animado
          transition={{ duration: 1, ease: "easeInOut" }} // Configuración de la transición
        >
          <Link to={"/"}>
            <img
              src={pokeballImage}
              alt="Pokedex Logo"
              className="w-full h-full"
            />
          </Link>
        </motion.div>
        <Pokesearch />
      </div>

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
