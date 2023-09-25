import { DetailedPokemon } from '../domain/detailed-pokemon';
import { Pokemon, PokemonData } from '../domain/pokemon-data';

const urlBase = 'https://pokeapi.co/api/v2/';

export const getPokemonData = async (cant: number, offset: number) => {
	const url = `${urlBase}pokemon?limit=${cant}&offset=${offset}`;
	const res = await fetch(url);
	const data = (await res.json()) as PokemonData;
	return data;
};

export const getPokemonDetailByName = async (pokemonName: string) => {
	const res = await fetch(`${urlBase}pokemon/${pokemonName}`);
	const data = (await res.json()) as DetailedPokemon;
	return data;
};

export const getPokemonListWithDetail = async (pokemonList: Pokemon[]) => {
	const pokemonListPromise = pokemonList.map(({ name }) =>
		getPokemonDetailByName(name),
	);

	return Promise.all(pokemonListPromise);
};
