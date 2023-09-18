import { FC } from 'react';
import { PokemonListContainer } from './PokemonList.styled';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonList: FC = () => {
	const pokemons = Array(14).fill('');
	return (
		<PokemonListContainer>
			{pokemons.map((_, index) => (
				<PokemonCard key={index} />
			))}
		</PokemonListContainer>
	);
};
