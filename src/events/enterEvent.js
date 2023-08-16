import dom from "../dom.js";
import findPokemonHandler from "../handlers/findPokemonHandler.js";

const enterListener = () => {
  dom.userInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      findPokemonHandler();
    }
  });
};

export default enterListener;
