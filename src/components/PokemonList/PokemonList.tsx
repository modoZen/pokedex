import { FC } from 'react';
import { PokemonListContainer } from './PokemonList.styled';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Pokemon } from '../../domain/pokemon-data';

interface PokemonListProps {
	pokemons: Pokemon[];
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
