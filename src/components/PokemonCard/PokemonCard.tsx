import { pokemonTypes } from '../../utils/pokemonTypes';
import { PokemonType } from '../PokemonType/PokemonType';
import {
	PokemonCardContainer,
	PokemonCardImg,
	PokemonCardImgWrapper,
	PokemonCardName,
	PokemonCardTypeWrapper,
} from './PokemonCard.styled';

export const PokemonCard = () => {
	const name = 'lapras';
	const sprites =
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png';
	const types = ['water', 'ice'];

	return (
		<PokemonCardContainer types={types}>
			<PokemonCardImgWrapper>
				<PokemonCardImg src={sprites} alt={name} />
			</PokemonCardImgWrapper>
			<PokemonCardName>{name}</PokemonCardName>
			<PokemonCardTypeWrapper>
				{types.map(pokemonType => (
					<PokemonType
						key={pokemonType}
						type={pokemonType}
						color={pokemonTypes[pokemonType].color}
						letterFont={pokemonTypes[pokemonType].letterFont}
					/>
				))}
			</PokemonCardTypeWrapper>
		</PokemonCardContainer>
	);
};
