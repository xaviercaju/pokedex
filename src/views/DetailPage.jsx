import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../api/api";
import { useEffect, useState } from "react";

function DetailPage() {
  const { name } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const response = await getPokemonInfo(name);
        setPokemonInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonInfo();
  }, [name]);

  const getTypeColors = (type) => {
    const typeColors = {
      normal: "bg-gray-400",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-400",
      ice: "bg-blue-300",
      fighting: "bg-red-600",
      poison: "bg-purple-500",
      ground: "bg-yellow-600",
      flying: "bg-indigo-400",
      psychic: "bg-pink-400",
      bug: "bg-green-600",
      rock: "bg-gray-600",
      ghost: "bg-indigo-700",
      dragon: "bg-purple-600",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
      // Add more type colors here
    };
    
    return typeColors[type] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen  py-8 flex justify-center">
      {pokemonInfo ? (
        <div className="max-w-3xl  bg-white rounded-lg shadow-lg m-6">
          <div
            className={`h-6 -mt-1 ${getTypeColors(
              pokemonInfo.types[0].type.name
            )} rounded-t-lg`}
          />
          <div className="p-4">
            <img
              className="md:w-1/2 w-3/4 h-auto rounded-md my-4 p-6 m-auto"
              src={pokemonInfo.sprites.other['official-artwork'].front_default}
              alt={`${name} sprite`}
            />
            <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center capitalize">
              {name}
            </h1>
            <div className="flex justify-center mb-4 capitalize">
              {pokemonInfo.types.map((type) => (
                <span
                  key={type.type.name}
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${getTypeColors(
                    type.type.name
                  )} text-white mx-1`}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Abilities
            </h2>
            <ul className="mb-4">
              {pokemonInfo.abilities.map((ability) => (
                <li key={ability.ability.name} className="text-gray-700">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Attributes
                </h2>
                <p className="text-gray-700">
                  Base Experience: {pokemonInfo.base_experience}
                </p>
                <p className="text-gray-700">
                  Height: {pokemonInfo.height / 10} meters
                </p>
                <p className="text-gray-700">
                  Weight: {pokemonInfo.weight / 10} kilograms
                </p>
                {/* Add more attributes here */}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Attacks</h2>
                <ul>
                  {pokemonInfo.moves.slice(0, 5).map((move) => (
                    <li key={move.move.name} className="text-gray-700">
                      {move.move.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
