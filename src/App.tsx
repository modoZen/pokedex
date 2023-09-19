import { useEffect, useState } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header/Header';
import { PokemonList } from './components/PokemonList/PokemonList';
import { getPokemonListWithDetail } from './api/pokeApi';
import { Pokemon } from './domain/pokemon-data';

function App() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		const fetchPokemon = async () => {
			const data = await getPokemonListWithDetail();
			setPokemons(data);
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
