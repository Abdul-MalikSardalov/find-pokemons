import dom from "../dom.js";
import findPokemonHandler from "../handlers/findPokemonHandler.js";

const findPokemonListeners = () => {
  dom.searchBtn.addEventListener("click", findPokemonHandler);
};

export default findPokemonListeners;
