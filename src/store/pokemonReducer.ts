import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailedPokemon } from '../domain/detailed-pokemon';
import { AppThunk } from '.';
import { setError, setLoading } from './uiReducer';
import { getPokemonData, getPokemonListWithDetail } from '../api/pokeApi';
import { PokemonData } from '../domain/pokemon-data';

interface PokemonState {
	pokemons: DetailedPokemon[];
	prev: string | null;
	next: string | null;
	page: number;
	count: number;
}

const initialState: PokemonState = {
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
		setPokemons: (state, action: PayloadAction<PokemonState['pokemons']>) => {
			state.pokemons = action.payload;
		},
		setPokemonData: (state, action: PayloadAction<PokemonData>) => {
			state.count = action.payload.count;
			state.next = action.payload.next;
			state.prev = action.payload.previous;
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

export const { setPage, setPokemons, setPokemonData } = pokemonSlice.actions;

export default pokemonSlice.reducer;

// import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { AppThunk } from '.';
// import { setError, setLoading } from './uiReducer';
// import { getPokemonData, getPokemonListWithDetail } from '../api/pokeApi';
// import { PokemonsData, Pokemon } from '../domain/pokemons-data';
// import { DetailedPokemon } from '../domain/pokemon-data';

// interface PokemonState {
// 	detailedPokemons: DetailedPokemon[];
// 	pokemons: Pokemon[];
// 	prev: string | null;
// 	next: string | null;
// 	page: number;
// 	count: number;
// }

// const initialState: PokemonState = {
// 	detailedPokemons: [],
// 	pokemons: [],
// 	next: null,
// 	prev: null,
// 	count: 0,
// 	page: 0,
// };

// export const pokemonSlice = createSlice({
// 	name: 'slicePokemon',
// 	initialState,
// 	reducers: {
// 		setPokemons: (state, action: PayloadAction<DetailedPokemon[]>) => {
// 			state.detailedPokemons = action.payload;
// 		},
// 		setPokemonData: (state, action: PayloadAction<PokemonsData>) => {
// 			state.count = action.payload.count;
// 			state.next = action.payload.next;
// 			state.prev = action.payload.previous;
// 			state.pokemons = action.payload.results;
// 		},
// 		setPage: (state, action: PayloadAction<number>) => {
// 			state.page = action.payload;
// 		},
// 	},
// });

// export const fetchPokemonList =
// 	(cant: number, offset: number): AppThunk =>
// 	async dispatch => {
// 		dispatch(setLoading(true));
// 		try {
// 			const pokemonData = await getPokemonData(cant, offset);
// 			dispatch(setPokemonData(pokemonData));
// 			// const data = await getPokemonListWithDetail(pokemonData.results);
// 			// dispatch(setPokemons(data));
// 		} catch (error) {
// 			dispatch(setError(error));
// 		} finally {
// 			dispatch(setLoading(false));
// 		}
// 	};

// export const fetchPokemonDetailList =
// 	(pokemon: Pokemon[]): AppThunk =>
// 	async dispatch => {
// 		dispatch(setLoading(true));
// 		try {
// 			const data = await getPokemonListWithDetail(pokemon);
// 			dispatch(setPokemons(data));
// 		} catch (error) {
// 			dispatch(setError(error));
// 		} finally {
// 			setTimeout(() => {
// 				dispatch(setLoading(false));
// 			}, 1500);
// 		}
// 	};

// export const { setPokemons, setPage, setPokemonData } = pokemonSlice.actions;

// export default pokemonSlice.reducer;
