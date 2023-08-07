import React, { useEffect, useState } from "react";
import { getPokemonInfo } from "../../api/api";
function PokedexElement(pokemon) {

    const [pokemonInfo, setPokemonInfo] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {

                const response = await getPokemonInfo(pokemon.pokemon.name)
                setPokemonInfo(response.data);


            }

            catch (e) {
                console.log(e)
            }
        };

        fetchPokemons();
    }, []);

    // ?. comprova si existeix

    return (
        <div className='flex flex-col items-center justify-center p-3 m-2 bg-slate-400 text-white capitalize rounded-lg'>
            <h1>{pokemon.pokemon.name}</h1>
            <img src={pokemonInfo.sprites?.front_default} alt="" /> 
        </div>

    )

}


export default PokedexElement