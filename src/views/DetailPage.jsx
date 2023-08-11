import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../api/api";
import { useEffect, useState } from "react";

function DetailPage() {
  const { name } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState(null); // Fix the destructuring

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getPokemonInfo(name);
        setPokemonInfo(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [name]); // Include name as a dependency

  return (
    <div>
      <h1>{name}</h1>
      {/* Render the pokemonInfo or its properties */}
    </div>
  );
}

export default DetailPage;
