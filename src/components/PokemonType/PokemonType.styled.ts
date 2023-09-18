import styled from 'styled-components';
import { PokemonCardContainer } from '../PokemonCard/PokemonCard.styled';

interface PokemonTypeContainerProps {
	color: string;
}

export const PokemonTypeContainer = styled.div<PokemonTypeContainerProps>`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.125rem 0.75rem;
	color: ${({ color }) => color};
	background-color: ${({ color }) => `${color}50`};
	font-weight: 600;
	border-style: solid;
	border-color: currentColor;
	border-width: 0px;
	border-radius: 9999px;
	${PokemonCardContainer}:hover & {
		border-width: 1px;
	}
`;

export const PokemonTypeIcon = styled.span`
	font-family: 'Essentiarum';
	line-height: 24px;
`;
