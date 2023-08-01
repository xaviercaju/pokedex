import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/NavBar";
import PrimaryButton from "../components/inputs/Primarybutton";
import RenderPikachu from "../components/renders/pikachu/Pikachu"
import {getPokemons} from "../api/api"
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
    <div>
      <Navbar />
      <h1>Pokedex</h1>

      {pokemons.map((pokemon)=>(
        <PokedexElement pokemon = {pokemon} key = {pokemon.name} />
      ))}

    </div>
  );
}

export default HomePage;


