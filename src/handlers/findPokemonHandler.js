import dom from "../dom.js";
import getPokemonData from "../../apis/getPokemon.js";
import createDom from "../components/createDom.js";
import data from "../data.js";
import updatePokemon from "../components/updatePokemon.js";

const findPokemonHandler = async () => {
  const id = Number(dom.userInput.value);
  const alreadyExisted = document.getElementById("container");

  if (data.pokemonId === id) {
    dom.errorMessage.remove();
    return;
  }

  if (Number.isNaN(id) || id <= 0 || id >= 1010) {
    dom.errorMessage.innerHTML = "Please enter a valid Pokémon ID.";
    dom.errorMessage.id = "error-message";
    dom.rootDiv.append(dom.errorMessage);
    if (alreadyExisted) {
      alreadyExisted.remove();
    }
    data.pokemonId = null;
    return;
  }

  const pokemonData = await getPokemonData(id);

  if (!alreadyExisted) {
    dom.errorMessage.remove();
    const pokemonDom = createDom(pokemonData);
    dom.rootDiv.append(pokemonDom);
  } else {
    updatePokemon(alreadyExisted, pokemonData);
  }

  data.pokemonId = id;
};

export default findPokemonHandler;
