import React, { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getAllPokemons } from "../../api/api";
import { Link } from "react-router-dom";

function Pokesearch() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const placeholders = ["Pikachu", "Charizard", "Charmander", "Bulbasaur"];
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [typingProgress, setTypingProgress] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const searchContainerRef = useRef(null);
  const hideResultsTimeoutRef = useRef(null);

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
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
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

  const handleResultClick = () => {
    setShowResults(false);
  };

  const startHideResultsTimeout = () => {
    hideResultsTimeoutRef.current = setTimeout(() => {
      setShowResults(false);
    }, 2000);
  };

  const clearHideResultsTimeout = () => {
    clearTimeout(hideResultsTimeoutRef.current);
  };

  useEffect(() => {
    if (showResults) {
      startHideResultsTimeout();
    } else {
      clearHideResultsTimeout();
    }
  }, [showResults]);

  useEffect(() => {
    if (!searchTerm) {
      const intervalId = setInterval(() => {
        const placeholder = placeholders[currentPlaceholderIndex];
        if (typingProgress <= placeholder.length) {
          setCurrentPlaceholder(placeholder.substring(0, typingProgress));
          setTypingProgress(typingProgress + 1);
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setTypingProgress(0);
            setCurrentPlaceholderIndex(
              (prevIndex) => (prevIndex + 1) % placeholders.length
            );
          }, 1000); // Delay before switching to the next placeholder
        }
      }, 200); // Adjust the interval time (in milliseconds) as needed

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [searchTerm, currentPlaceholderIndex, typingProgress]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        setIsSearching(true);
        const filteredPokemons = pokemons.filter(
          (pokemon) =>
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
      <div
        className="relative bg-white rounded-full p-3 shadow-md"
        ref={searchContainerRef}
        onMouseEnter={clearHideResultsTimeout}
        onMouseLeave={startHideResultsTimeout}
      >
        <input
          type="text"
          placeholder={currentPlaceholder}
          className="rounded-full border-gray-300 py-2 pl-8 pr-3 w-full focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onBlur={startHideResultsTimeout}
          onFocus={() => setSearchTerm("")}
        />
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400">
          <SearchIcon />
        </div>
        {showResults && (
          <div className="mt-1 bg-white rounded-md border border-gray-300 shadow-lg absolute w-full">
            {isSearching ? (
              <div className="p-2 text-center">Buscando...</div>
            ) : (
              searchResults.length > 0 &&
              searchResults.map((pokemon) => (
                <Link
                  to={"/" + pokemon.name}
                  className="text-black dark:text-white hover:text-blue-500 transition-colors block p-2 border-b border-gray-300"
                  onClick={handleResultClick}
                  key={pokemon.name}
                >
                  {pokemon.name}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pokesearch;
