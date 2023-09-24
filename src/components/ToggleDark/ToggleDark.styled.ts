import styled from 'styled-components';

interface Props {
	$isDarkMode: boolean;
}

export const ToggleDarkStyled = styled.button<Props>`
	background-color: transparent;
	position: relative;
	padding: 0.625rem;
	font-size: 0.875rem;
	border-radius: 0.5rem;
	outline: none;
	border: none;
	color: rgb(107, 114, 128);
	cursor: pointer;
	transition-property: all;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	&:hover {
		background-color: ${({ $isDarkMode }) =>
			$isDarkMode ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)'};
	}
`;
