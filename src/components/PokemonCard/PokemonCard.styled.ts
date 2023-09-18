import styled from 'styled-components';
import { pokemonTypes } from '../../utils/pokemonTypes';

interface PokemonCardContainerProps {
	types: string[];
}

export const PokemonCardContainer = styled.div<PokemonCardContainerProps>`
	background: ${({ types }) =>
		types.length > 1
			? `linear-gradient(0deg, ${types
					.map(type => pokemonTypes[type].color + 50)
					.join(', ')})`
			: ''};
	color: ${({ types }) => pokemonTypes[types[0]].color};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	max-height: 100%;
	min-height: 250px;
	width: 250px;
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

export const PokemonCardImgWrapper = styled.div`
	background: linear-gradient(0deg, ${'#539AE2' + 50}, ${'#70CBD4' + 50});
	color: #539ae2;
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
	margin: 0;
	color: #539ae2;
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
