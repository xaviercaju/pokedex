import { useParams } from "react-router-dom";
import { getPokemonInfo } from "../api/api";

function DetailPage() {
  //  getPokemonInfo(pokemonName);
  const name = useParams();
  return (
    <div>
      <h1> {name} </h1>;
    </div>
  );
}

export default DetailPage;
