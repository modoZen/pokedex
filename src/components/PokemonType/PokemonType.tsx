import { FC } from 'react';
import { PokemonTypeContainer, PokemonTypeIcon } from './PokemonType.styled';

interface Props {
	type: string;
	color: string;
	letterFont: string;
}
export const PokemonType: FC<Props> = ({ type, color, letterFont }) => {
	return (
		<PokemonTypeContainer color={color}>
			<div>
				<PokemonTypeIcon>{letterFont}</PokemonTypeIcon>
			</div>
			<span>{type}</span>
		</PokemonTypeContainer>
	);
};
