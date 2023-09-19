import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../domain/pokemon-data';
import { AppThunk } from '.';
import { setError, setLoading } from './uiReducer';
import { getPokemonListWithDetail } from '../api/pokeApi';

interface PokemonState {
	pokemons: Pokemon[];
}

const initialState: PokemonState = {
	pokemons: [],
};

export const pokemonSlice = createSlice({
	name: 'slicePokemon',
	initialState,
	reducers: {
		setPokemons: (state, action: PayloadAction<PokemonState['pokemons']>) => {
			state.pokemons = action.payload;
		},
	},
});

export const fetchPokemons = (): AppThunk => async dispatch => {
	dispatch(setLoading(true));
	try {
		const data = await getPokemonListWithDetail();
		dispatch(setPokemons(data));
	} catch (error) {
		dispatch(setError(error));
	} finally {
		setTimeout(() => {
			dispatch(setLoading(false));
		}, 1500);
	}
};

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
