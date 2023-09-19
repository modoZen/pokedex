import { FC } from 'react';
import { PokemonListContainer } from './PokemonList.styled';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Pokemon } from '../../domain/pokemon-data';

interface PokemonListProps {
	pokemons: Pokemon[];
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
	return (
		<PokemonListContainer>
			{pokemons.map((pokemon, index) => (
				<PokemonCard key={index} pokemon={pokemon} />
			))}
		</PokemonListContainer>
	);
};
