import axios from "axios";

const URL_BACKEND = import.meta.env.VITE_POKEAPI_URL //me carrega la crida api

//async = multi threads python
const getPokemons = async (limit=25, page=0) => {

    //await --> la ppal espera a que acabi el await --> si no hi ha async no hi ha un await
    const response = await axios.get(URL_BACKEND + '/pokemon?limit=' + limit + '&offset=' + page)

    console.log(response)
    
return response

}

const getAllPokemons = async (limit=9999, page=0) => {

    //await --> la ppal espera a que acabi el await --> si no hi ha async no hi ha un await
    const response = await axios.get(URL_BACKEND + '/pokemon?limit=' + limit + '&offset=' + page)

    console.log(response)
    
return response

}


const getPokemonInfo = async (name) => {

    //await --> la ppal espera a que acabi el await --> si no hi ha async no hi ha un await
    const response = await axios.get(URL_BACKEND + '/pokemon/'+name)

    console.log(response)
    
return response

}

export{getPokemons, getPokemonInfo, getAllPokemons}


