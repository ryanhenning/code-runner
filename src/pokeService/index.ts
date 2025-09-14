export const pokeFetcher = async (limit: number = 150) => {
  const responseJson = (
    await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
  ).json();

  const { results: pokemon } = await responseJson;

  return pokemon;
};
