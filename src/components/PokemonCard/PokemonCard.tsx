import { FC } from 'react';
import { DetailedPokemon } from '../../domain/detailed-pokemon';
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
	pokemon: Pick<DetailedPokemon, 'name' | 'sprites' | 'types'>;
}

const imageNotFound =
	'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
	const { name, sprites, types } = pokemon;

	return (
		<PokemonCardContainer $types={types.map(type => type.type.name)}>
			<PokemonCardImgWrapper $types={types.map(type => type.type.name)}>
				<PokemonCardImg
					src={
						sprites.other?.['official-artwork'].front_default || imageNotFound
					}
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
