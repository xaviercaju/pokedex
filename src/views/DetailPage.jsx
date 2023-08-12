import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../api/api";
import { useEffect, useState } from "react";
import DetailHeader from "../components/Details/DetailHeader";
import DetailBody from "../components/Details/DetailBody";

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
            <DetailHeader pokemon={pokemonInfo} />
            <DetailBody pokemon={pokemonInfo} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-300">Loading...</p>
      )}
    </div>
  );
}

export default DetailPage;
