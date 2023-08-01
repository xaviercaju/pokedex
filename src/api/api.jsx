import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_POKEAPI_URL //me carrega la crida api

//async = multi threads python
export const getPokemons = async () => {

    //await --> la ppal espera a que acabi el await --> si no hi ha async no hi ha un await
    const response = await axios.get(URL_BACKEND + '/pokemon')
    
return response

}



