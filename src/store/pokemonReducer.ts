import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../domain/pokemon-data';
import { AppThunk } from '.';
import { setError, setLoading } from './uiReducer';
import { getPokemonData, getPokemonListWithDetail } from '../api/pokeApi';
import { PokemonsData } from '../domain/pokemons-data';

interface PokemonState {
	pokemons: Pokemon[];
	prev: string | null;
	next: string | null;
	count: number;
}

const initialState: PokemonState = {
	pokemons: [],
	next: null,
	prev: null,
	count: 0,
};

export const pokemonSlice = createSlice({
	name: 'slicePokemon',
	initialState,
	reducers: {
		setPokemons: (state, action: PayloadAction<PokemonState['pokemons']>) => {
			state.pokemons = action.payload;
		},
		setPokemonData: (state, action: PayloadAction<PokemonsData>) => {
			state.count = action.payload.count;
			state.next = action.payload.next;
			state.prev = action.payload.previous;
		},
	},
});

export const fetchPokemonData =
	(cant: number, offset: number): AppThunk =>
	async dispatch => {
		dispatch(setLoading(true));
		try {
			const pokemonData = await getPokemonData(cant, offset);
			dispatch(setPokemonData(pokemonData));
			const data = await getPokemonListWithDetail(pokemonData.results);
			dispatch(setPokemons(data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			setTimeout(() => {
				dispatch(setLoading(false));
			}, 1500);
		}
	};

export const { setPokemons, setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
