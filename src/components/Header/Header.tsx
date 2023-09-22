import {
	HeaderContentStyled,
	HeaderLogoStyled,
	HeaderStyled,
} from './Header.styled';

export const Header = () => {
	return (
		<HeaderStyled>
			<HeaderContentStyled>
				<HeaderLogoStyled>Pokedex</HeaderLogoStyled>
			</HeaderContentStyled>
		</HeaderStyled>
	);
};
