import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";

import { getPokemons } from "../api/api";
import PokedexElement from "../components/Pokedex/PokedexElement";
import Pokesearch from "../components/inputs/Pokesearch";

function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const loadRef = useRef(null);

  const loadMore = async () => {
    const pokemonList = await getPokemons(25, page);
    setPage((prev) => prev + 25); // Increment page AFTER the API call
    setPokemons((prev) => [...prev, ...pokemonList.data.results]);
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
      { threshold: 1 }
    );
    if (loadRef.current) observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, [loadRef]);

  return (
    <div className="w-full">
      <Navbar />
      <h1>Pokedex</h1>
      <div className="mt-36 md:mt-10">
        <Pokesearch />
        <div className="flex flex-wrap justify-start ">
          {pokemons.map((pokemon, index) => (
            <div className="w-1/2 p-2  md:w-1/4" key={index}>
              <PokedexElement pokemon={pokemon} />
            </div>
          ))}
          <div ref={loadRef} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
