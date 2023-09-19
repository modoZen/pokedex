import { Pokemon } from '../domain/pokemon-data';
import { PokemonsData } from '../domain/pokemons-data';

const urlBase = 'https://pokeapi.co/api/v2/';

export const getPokemonList = async () => {
	const res = await fetch(urlBase + 'pokemon?limit=12&offset=0');
	const data = (await res.json()) as PokemonsData;
	return data.results;
};

export const getPokemonDetailByName = async (pokemonName: string) => {
	const res = await fetch(`${urlBase}pokemon/${pokemonName}`);
	const data = (await res.json()) as Pokemon;
	return data;
};

export const getPokemonListWithDetail = async () => {
	const pokemonList = await getPokemonList();
	const pokemonListPromise = pokemonList.map(({ name }) =>
		getPokemonDetailByName(name),
	);

	return Promise.all(pokemonListPromise);
};
