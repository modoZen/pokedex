import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { useAppSelector } from './store';
import { SpinnerPokeball } from './components/SpinnerPokeball/SpinnerPokeball';
import { PaginationComponent } from './components/PaginationComponent/PaginationComponent';

function App() {
	const { pokemons } = useAppSelector(state => state.pokemonState);
	const { isLoading } = useAppSelector(state => state.uiState);

	return (
		<>
			<GlobalStyles />
			{isLoading && <SpinnerPokeball />}

			<Header />
			<PaginationComponent />
			<PokemonList pokemons={pokemons} />
		</>
	);
}

export default App;
