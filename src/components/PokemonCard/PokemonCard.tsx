import { FC } from 'react';
import { Pokemon } from '../../domain/pokemon-data';
import { pokemonTypes } from '../../utils/pokemonTypes';
import { PokemonType } from '../PokemonType/PokemonType';
import {
	PokemonCardContainer,
	PokemonCardImg,
	PokemonCardImgWrapper,
	PokemonCardName,
	PokemonCardTypeWrapper,
} from './PokemonCard.styled';

interface PokemonCardProps {
	pokemon: Pick<Pokemon, 'name' | 'sprites' | 'types'>;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
	const { name, sprites, types } = pokemon;
	// const sprites =
	// 	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png';

	return (
		<PokemonCardContainer types={types.map(type => type.type.name)}>
			<PokemonCardImgWrapper types={types.map(type => type.type.name)}>
				<PokemonCardImg
					src={sprites.other?.['official-artwork'].front_default}
					alt={name}
				/>
			</PokemonCardImgWrapper>
			<PokemonCardName>{name}</PokemonCardName>
			<PokemonCardTypeWrapper>
				{types.map(pokemonType => (
					<PokemonType
						key={pokemonType.type.name}
						type={pokemonType.type.name}
						color={pokemonTypes[pokemonType.type.name].color}
						letterFont={pokemonTypes[pokemonType.type.name].letterFont}
					/>
				))}
			</PokemonCardTypeWrapper>
		</PokemonCardContainer>
	);
};
