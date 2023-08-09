import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { getAllPokemons } from "../../api/api";

function Pokesearch() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await getAllPokemons();
        setPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
        setPokemons([]);
      }
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    // Implement debouncing logic here
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        setIsSearching(true);
        // Simulate server call here
        const filteredPokemons = pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredPokemons);
        setIsSearching(false);
      } else {
        setSearchResults([]);
      }
    }, 500); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, pokemons]);

  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative">
        <TextField
          label="Buscar Pokémon..."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <div className="bg-red-500 text-white rounded-full p-2 absolute right-2 top-2">
                <SearchIcon />
              </div>
            ),
            className:
              "rounded-l-full rounded-r-none border-r-0 focus:ring-0 focus:border-gray-300",
          }}
          InputLabelProps={{
            className: "bg-white px-2",
          }}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {searchResults.length > 0 && searchTerm.trim() !== "" && (
          <div className="mt-1 bg-white rounded-md border border-gray-300 shadow-lg absolute w-full">
            {isSearching ? (
              <div className="p-2 text-center">Buscando...</div>
            ) : (
              searchResults.map((pokemon) => (
                <div key={pokemon.name} className="p-2 border-b border-gray-300">
                  {pokemon.name}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokesearch;
