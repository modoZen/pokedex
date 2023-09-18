import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<PokemonList />
		</>
	);
}

export default App;
