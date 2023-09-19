import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../domain/pokemon-data';

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

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
