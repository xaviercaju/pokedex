import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion"; // Importa motion de framer-motion
import Navbar from "../components/navbar/Navbar";
import { getPokemons } from "../api/api";
import PokedexElement from "../components/Pokedex/PokedexElement";
import Pokesearch from "../components/inputs/Pokesearch";


function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const loadRef = useRef(null);
  const loading = useRef(false);

  const loadMore = async () => {
    if (loading.current) return;

    loading.current = true;
    console.log("Loading more items from page:", page);
    const pokemonList = await getPokemons(25, page);
    console.log("Fetched new items:", ...pokemonList.data.results);
    setPokemons((prev) => [...prev, ...pokemonList.data.results]);
    setPage((prev) => prev + 25); // Increment page AFTER the API call
    loading.current = false;
  };

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );
    if (loadRef.current) observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <div className="flex flex-wrap justify-start ">
          {pokemons.map((pokemon, index) => (
            <motion.div
              className="w-1/2 p-2 md:w-1/4 md:pl-10 md:pr-10"
              key={index}
              whileHover={{ scale: 1.05 }} // Agrega la animación de escala al hacer hover
              transition={{ duration: 0.5, ease: "easeInOut" }}  // Configuración de la transición

            >
              <PokedexElement pokemon={pokemon} delay={0.2} />
            </motion.div>
          ))}
          <div ref={loadRef} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
