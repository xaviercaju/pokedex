import React, { useEffect, useState } from "react";
import { getPokemonInfo } from "../../api/api";
function PokedexElement(pokemon) {

    const [pokemonInfo, setPokemonInfo] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {

                const response = await getPokemonInfo(pokemon.pokemon.name)
                setPokemonInfo(response.data.results);

                console.log(setPokemonInfo)
            }

            catch (e) {
                console.log(e)
            }
        };

        fetchPokemons();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center p-3 m-2 bg-slate-400 text-white capitalize rounded-lg'>
            <h1>{pokemon.pokemon.name}</h1>
        </div>

    )

}


export default PokedexElement