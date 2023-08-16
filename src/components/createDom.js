import createAbilitiesList from "./createAbilityList.js";

const createDom = (pokemonData) => {
  const pokemonContainer = document.createElement("div");
  pokemonContainer.className = "pokemon-container";
  pokemonContainer.id = "container";

  //create pokemon name
  const name = document.createElement("h2");
  name.innerText = pokemonData.name;
  name.id = "name";

  //create pokemon img
  const img = document.createElement("img");
  img.src = pokemonData.sprites.front_default;
  img.alt = "pokemon";

  // create ability list
  const abilities = document.createElement("h3");
  abilities.innerHTML = "Abilities";
  const abilitiesList = createAbilitiesList(pokemonData.abilities);
  pokemonContainer.append(name, img, abilities, abilitiesList);

  return pokemonContainer;
};

export default createDom;
