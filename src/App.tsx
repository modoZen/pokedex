import { useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { getPokemonListWithDetail } from './api/pokeApi';
import { useAppDispatch, useAppSelector } from './store';
import { setPokemons } from './store/pokemonSlice';

function App() {
	const pokemons = useAppSelector(state => state.pokemonState.pokemons);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchPokemon = async () => {
			const data = await getPokemonListWithDetail();
			dispatch(setPokemons(data));
		};

		fetchPokemon();
	}, []);

	return (
		<>
			<GlobalStyles />
			<Header />
			<PokemonList pokemons={pokemons} />
		</>
	);
}

export default App;
