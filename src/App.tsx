import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { useAppSelector } from './store';
import { SpinnerPokeball } from './components/SpinnerPokeball/SpinnerPokeball';
import { PaginationComponent } from './components/PaginationComponent/PaginationComponent';
import { Main } from './App.styled';

function App() {
	const { pokemons } = useAppSelector(state => state.pokemonState);
	const { isLoading, isDarkMode } = useAppSelector(state => state.uiState);

	return (
		<Main $isDarkMode={isDarkMode}>
			<GlobalStyles />
			{isLoading && <SpinnerPokeball />}

			<Header />
			<PaginationComponent />
			<PokemonList pokemons={pokemons} />
		</Main>
	);
}

export default App;
