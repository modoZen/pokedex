import { useEffect } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { useAppDispatch, useAppSelector } from './store';
import { fetchPokemons } from './store/pokemonReducer';

function App() {
	const pokemons = useAppSelector(state => state.pokemonState.pokemons);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPokemons());
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
