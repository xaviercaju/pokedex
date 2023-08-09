import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getAllPokemons } from "../../api/api";

function Pokesearch() {
  const [pokemons, setPokemons] = useState([]); //Sempre que la variable es sigueixi modificant, s'actualitzara el component useSTATE <!DOCTYPE html>
  //pokemons es la variable i setPokemons la funció que els introdueix

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getAllPokemons();
        setPokemons(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        setPokemons([]);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <div className="flex items-center justify-center py-4">
      <input
        type="text"
        className="mr-3 px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder="Buscar Pokémon..."
      />
      <div className="bg-red-500 text-white rounded-full p-2">
        <SearchIcon />
      </div>
    </div>
  );
}

export default Pokesearch;
