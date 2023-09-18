import {
	PokemonCardContainer,
	PokemonCardImg,
	PokemonCardImgWrapper,
	PokemonCardName,
	PokemonCardTypeWrapper,
} from './PokemonCard.styled';

export const PokemonCard = () => {
	return (
		<PokemonCardContainer>
			<PokemonCardImgWrapper>
				<PokemonCardImg
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png'
					alt='lapras'
				/>
			</PokemonCardImgWrapper>
			<PokemonCardName>lapras</PokemonCardName>
			<PokemonCardTypeWrapper>
				<div>Agua </div>
				<div>Hielo</div>
			</PokemonCardTypeWrapper>
		</PokemonCardContainer>
	);
};
