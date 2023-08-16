import dom from '../dom.js';
import getPokemonData from '../../apis/getPokemon.js';
import createDom from '../components/createDom.js';

const findPokemonHandler = async () => {
    dom.rootDiv.innerHTML = '';

    const userInput = dom.userInput.value;

    if (!userInput) {
        dom.errorMessage.innerText = `Please write id's separated with ','`;
        dom.rootDiv.append(dom.errorMessage);
        return;
    }

    let validId = [];
    const separatedId = userInput.split(',');

    separatedId.forEach((id) => {
        if (id > 0 && id < 1010 && !Number.isNaN(id)) {
            validId.push(id);
        }
    });

    if (validId.length === 0) {
        dom.errorMessage.innerText = `Please, write correct is's`;
        dom.rootDiv.append(dom.errorMessage);
        return;
    }

    const uniqId = [...new Set(separatedId)];

    const pokemonsPromises = uniqId.map((id) => getPokemonData(id));
    const pokemonArrayOfPromises = await Promise.all(pokemonsPromises);

    pokemonArrayOfPromises.forEach((pokemonData) => {
        const pokemonDom = createDom(pokemonData);
        dom.rootDiv.append(pokemonDom);
    });
};

export default findPokemonHandler;
