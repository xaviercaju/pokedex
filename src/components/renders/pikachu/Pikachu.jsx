import axios from "axios";

function RenderPikachu() {
  const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

export default RenderPikachu;
