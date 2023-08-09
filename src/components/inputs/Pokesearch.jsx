import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { getAllPokemons } from "../../api/api";

function Pokesearch() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

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
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchTerm("");
        setSearchResults([]);
        setShowResults(false);
      } else {
        setShowResults(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        setIsSearching(true);
        const filteredPokemons = pokemons.filter(pokemon =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredPokemons);
        setIsSearching(false);
        setShowResults(true);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, pokemons]);

  return (
    <div className="flex items-center justify-center py-4">
      <div className="relative" ref={searchContainerRef}>
        <TextField
          label="Buscar Pokémon..."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <div className="bg-red-500 text-white rounded-full p-2 absolute right-2 top-2">
                <SearchIcon />
              </div>
            ),
            className: "rounded-xl focus:ring-2 focus:border-red-500 focus:border-4",
            style: {
              borderRadius: "12px",
            }
          }}
          InputLabelProps={{
            className: "bg-white px-2",
          }}
          className="rounded-md border border-gray-300" // Redondear aún más los bordes
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        {showResults && (
          <div className="mt-1 bg-white rounded-md border border-gray-300 shadow-lg absolute w-full">
            {isSearching ? (
              <div className="p-2 text-center">Buscando...</div>
            ) : searchResults.length > 0 ? (
              searchResults.map((pokemon) => (
                <div key={pokemon.name} className="p-2 border-b border-gray-300">
                  {pokemon.name}
                </div>
              ))
            ) : (
              searchTerm.trim() !== "" && <div className="p-2 text-center">No se encontraron resultados</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokesearch;
