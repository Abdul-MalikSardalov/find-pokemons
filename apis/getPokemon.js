const getPokemonData = async (id = 1) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch a pokemon with status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

export default getPokemonData;
