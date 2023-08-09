import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import PrimaryButton from "../components/inputs/Primarybutton";
import RenderPikachu from "../components/renders/pikachu/Pikachu"
import { getPokemons } from "../api/api"
import PokedexElement from "../components/Pokedex/PokedexElement";

function HomePage() {

  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getPokemons();
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        setPokemons([]);
      }
    };

    fetchPokemons();
  }, []);


  return (
    <div className="w-full">
      <Navbar />

      <h1>Pokedex</h1>
      <div className="flex flex-wrap justify-start mt-36 md:mt-10">
        {pokemons.map((pokemon) => (
          <div className='w-1/2 p-2  md:w-1/2' key={pokemon.name}>
            <PokedexElement pokemon={pokemon}  />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;


