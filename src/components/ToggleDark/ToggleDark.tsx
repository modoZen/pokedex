import { IconDark } from '../Icons/IconDark/IconDark';
import { IconLight } from '../Icons/IconLight/IconLight';
import { ToggleDarkStyled } from './ToggleDark.styled';
import { useAppDispatch, useAppSelector } from '../../store';
import { toggleDarkMode } from '../../store/uiReducer';

export const ToggleDark = () => {
	const { isDarkMode } = useAppSelector(state => state.uiState);
	const dispatch = useAppDispatch();

	return (
		<ToggleDarkStyled
			$isDarkMode={isDarkMode}
			onClick={() => {
				dispatch(toggleDarkMode());
			}}
		>
			{isDarkMode ? <IconLight /> : <IconDark />}
		</ToggleDarkStyled>
	);
};
