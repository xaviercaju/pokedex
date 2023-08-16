import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonInfo } from "../../api/api";
import { motion, useAnimation } from "framer-motion";

function PokedexElement({ pokemon, delay }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getPokemonInfo(pokemon.name);
        setPokemonInfo(response.data);
        // Inicia la animación con un retraso y secuencia suave
        await controls.start({ opacity: 1, y: [-20, 0], transition: { delay: delay, duration: 1, ease: "easeInOut" } });
      } catch (e) {
        console.log(e);
      }
    };

    fetchPokemons();
  }, [controls, delay, pokemon.name]);


  const getTypeColors = (type) => {
    const typeColors = {
      normal: "bg-gray-400",
      fire: "bg-red-400",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-400",
      ice: "bg-blue-300",
      fighting: "bg-red-600",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-400",
      bug: "bg-green-500",
      rock: "bg-gray-600",
      ghost: "bg-indigo-700",
      dragon: "bg-purple-600",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };

    return typeColors[type] || "bg-gray-500";
  };

  return (
    <motion.div
    className="flex flex-col items-center justify-center m-2 bg-gray-200 text-white capitalize rounded-lg shadow-md"
    initial={{ opacity: 0, y: 50 }} // Estado inicial
    animate={controls} // Aplica la animación controlada
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
      {pokemonInfo && (
        <div className="h-6 w-full flex">
          {pokemonInfo.types.length > 1 ? (
            <>
              <div
                className={`w-1/2 flex items-center justify-center ${getTypeColors(
                  pokemonInfo.types[0].type.name
                )} rounded-tl-lg  m-0`}
              >
                {pokemonInfo.types[0].type.name}
              </div>
              <div
                className={`w-1/2 flex items-center justify-center ${getTypeColors(
                  pokemonInfo.types[1].type.name
                )} rounded-tr-lg  m-0`}
              >
                {pokemonInfo.types[1].type.name}
              </div>
            </>
          ) : (
            <div
              className={`h-6 flex items-center justify-center ${getTypeColors(
                pokemonInfo.types[0].type.name
              )} rounded-t-lg m-0 w-full`}
            >
              {pokemonInfo.types[0].type.name}
            </div>
          )}
        </div>
      )}
      <Link
        to={"/" + pokemon.name}
        className="text-black hover:text-gray-500 transition-colors relative"
      >
        <div className="w-full">
          {pokemonInfo && (
            <img
              src={pokemonInfo.sprites.other["official-artwork"].front_default}
              alt={`Sprite of ${pokemon.name}`}
              className="mt-2 w-36"
            />
          )}
          <h1 className="text-xl font-bold m-auto mb-5 text-center">
            {pokemon.name}
          </h1>
        </div>
      </Link>
    </motion.div>
  );
}

export default PokedexElement;
