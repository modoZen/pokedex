import { FC } from 'react';
import { PokemonListContainer } from './PokemonList.styled';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { DetailedPokemon } from '../../domain/detailed-pokemon';

interface PokemonListProps {
	pokemons: DetailedPokemon[];
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
	if (pokemons.length === 0) {
		return <div style={{ minHeight: '80vh' }}></div>;
	}

	return (
		<PokemonListContainer>
			{pokemons.map((pokemon, index) => (
				<PokemonCard key={index} pokemon={pokemon} />
			))}
		</PokemonListContainer>
	);
};
