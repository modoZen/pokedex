import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { useAppDispatch, useAppSelector } from './store';
import { SpinnerPokeball } from './components/SpinnerPokeball/SpinnerPokeball';
import { PaginationComponent } from './components/PaginationComponent/PaginationComponent';
import { Main } from './App.styled';
import { useEffect } from 'react';
import { fetchPokemonDetailList } from './store/pokemonReducer';

function App() {
	const { pokemons, detailedPokemons } = useAppSelector(
		state => state.pokemonState,
	);
	const { isLoading, isDarkMode } = useAppSelector(state => state.uiState);
	const dispatch = useAppDispatch();

	useEffect(() => {
		pokemons.length > 0 && dispatch(fetchPokemonDetailList(pokemons));
	}, [pokemons]);

	return (
		<Main $isDarkMode={isDarkMode}>
			<GlobalStyles />
			{isLoading && <SpinnerPokeball />}

			<Header />
			<PaginationComponent />
			<PokemonList pokemons={detailedPokemons} />
			<PaginationComponent />
		</Main>
	);
}

export default App;
