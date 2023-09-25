import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailedPokemon } from '../domain/detailed-pokemon';
import { AppThunk } from '.';
import { setError, setLoading } from './uiReducer';
import { getPokemonData, getPokemonListWithDetail } from '../api/pokeApi';
import { PokemonData, Pokemon } from '../domain/pokemon-data';

interface PokemonState {
	detailedPokemons: DetailedPokemon[];
	pokemons: Pokemon[];
	prev: string | null;
	next: string | null;
	page: number;
	count: number;
}

const initialState: PokemonState = {
	detailedPokemons: [],
	pokemons: [],
	next: null,
	prev: null,
	count: 0,
	page: 0,
};

export const pokemonSlice = createSlice({
	name: 'slicePokemon',
	initialState,
	reducers: {
		setPokemons: (state, action: PayloadAction<DetailedPokemon[]>) => {
			state.detailedPokemons = action.payload;
		},
		setPokemonData: (state, action: PayloadAction<PokemonData>) => {
			state.count = action.payload.count;
			state.next = action.payload.next;
			state.prev = action.payload.previous;
			state.pokemons = action.payload.results;
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
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
		} catch (error) {
			dispatch(setError(error));
		} finally {
			setTimeout(() => {
				dispatch(setLoading(false));
			}, 1500);
		}
	};

export const fetchPokemonDetailList =
	(pokemon: Pokemon[]): AppThunk =>
	async dispatch => {
		dispatch(setLoading(true));
		try {
			const data = await getPokemonListWithDetail(pokemon);
			dispatch(setPokemons(data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			setTimeout(() => {
				dispatch(setLoading(false));
			}, 1500);
		}
	};

export const { setPage, setPokemons, setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;
