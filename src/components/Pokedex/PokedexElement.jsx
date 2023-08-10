import React, { useEffect, useState } from "react";
import { getPokemonInfo } from "../../api/api";
import { motion } from "framer-motion";

function PokedexElement({ pokemon }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getPokemonInfo(pokemon.name);
        setPokemonInfo(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPokemons();
  }, [pokemon.name]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center p-3 m-2 bg-slate-400 text-white capitalize rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }} // Animación al hacer hover
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 className="text-lg font-semibold">{pokemon.name}</h1>
      {pokemonInfo && (
        <img
          src={pokemonInfo.sprites?.front_default}
          alt={`Sprite of ${pokemon.name}`}
          className="mt-2 w-20 h-20"
        />
      )}
    </motion.div>
  );
}

export default PokedexElement;
