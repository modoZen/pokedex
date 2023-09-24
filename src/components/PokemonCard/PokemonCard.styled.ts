import styled from 'styled-components';
import { pokemonTypes } from '../../utils/pokemonTypes';

interface Props {
	$types: string[];
}

export const PokemonCardContainer = styled.div<Props>`
	/* justify-self: center; */
	background: ${({ $types }) =>
		$types.length > 1
			? `linear-gradient(0deg, ${$types
					.map(type => pokemonTypes[type].color + 50)
					.join(', ')})`
			: pokemonTypes[$types[0]].color + 50};
	color: ${({ $types }) => pokemonTypes[$types[0]].color};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	max-height: 100%;
	min-height: 250px;
	/* width: 15.625rem; */
	padding: 0.625rem 0;
	cursor: pointer;
	border-style: solid;
	border-color: currentColor;
	border-width: 0;
	border-radius: 0.75rem;
	transform: scale(1);
	transition-property: transform;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
		border-width: 1px;
		transform: scale(1.1);
	}
`;

export const PokemonCardImgWrapper = styled.div<Props>`
	background: ${({ $types }) =>
		$types.length > 1
			? `linear-gradient(0deg, ${$types
					.map(type => pokemonTypes[type].color + 50)
					.join(', ')})`
			: pokemonTypes[$types[0]].color + 50};
	color: ${({ $types }) => pokemonTypes[$types[0]].color};
	width: 50%;
	min-height: 150px;
	min-width: 150px;
	border-style: solid;
	border-color: currentColor;
	border-width: 0;
	border-radius: 9999px;
	margin-top: -0.25rem;
	${PokemonCardContainer}:hover & {
		border-width: 1px;
	}
`;

export const PokemonCardImg = styled.img`
	width: 100%;
	object-fit: cover;
	transform: scale(1.1);
`;

export const PokemonCardName = styled.p`
	text-align: center;
	text-transform: capitalize;
	font-weight: 600;
	font-size: 1.5rem;
	min-height: 3.25rem;
	display: flex;
	align-items: center;
	margin: 0;
	${PokemonCardContainer}:hover & {
		font-weight: 700;
	}
`;

export const PokemonCardTypeWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;
