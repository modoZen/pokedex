import { useAppSelector } from '../../store';
import { ToggleDark } from '../ToggleDark/ToggleDark';
import {
	HeaderContentStyled,
	HeaderLogoStyled,
	HeaderStyled,
} from './Header.styled';

export const Header = () => {
	const { isDarkMode } = useAppSelector(state => state.uiState);
	return (
		<HeaderStyled $isDarkMode={isDarkMode}>
			<HeaderContentStyled>
				<HeaderLogoStyled>Pokedex</HeaderLogoStyled>
				<ToggleDark />
			</HeaderContentStyled>
		</HeaderStyled>
	);
};
