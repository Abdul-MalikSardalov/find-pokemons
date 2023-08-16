import createAbilitiesList from "./createAbilityList.js";

// update list
const updatePokemon = (pokemonDom, pokemonData) => {
  pokemonDom.querySelector("#name").innerText = pokemonData.name;

  const imgElement = pokemonDom.querySelector("img");
  imgElement.src = pokemonData.sprites.front_default;

  const abilityList = createAbilitiesList(pokemonData.abilities);
  const oldList = pokemonDom.querySelector("#abilityList");
  oldList.replaceWith(abilityList);

  return pokemonDom;
};

export default updatePokemon;
