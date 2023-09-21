import { Pokemon } from '../domain/pokemon-data';
import { PokemonsData } from '../domain/pokemons-data';

const urlBase = 'https://pokeapi.co/api/v2/';

export const getPokemonData = async (cant: number, offset: number) => {
	const url = `${urlBase}pokemon?limit=${cant}&offset=${offset}`;
	const res = await fetch(url);
	const data = (await res.json()) as PokemonsData;
	return data;
};

export const getPokemonDetailByName = async (pokemonName: string) => {
	const res = await fetch(`${urlBase}pokemon/${pokemonName}`);
	const data = (await res.json()) as Pokemon;
	return data;
};

export const getPokemonListWithDetail = async (
	pokemonList: PokemonsData['results'],
) => {
	const pokemonListPromise = pokemonList.map(({ name }) =>
		getPokemonDetailByName(name),
	);

	return Promise.all(pokemonListPromise);
};
