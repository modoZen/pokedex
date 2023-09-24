import styled from 'styled-components';

interface Props {
	$isDarkMode: boolean;
}

export const Main = styled.main<Props>`
	min-height: 100vh;
	background-color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(17, 24, 39)' : 'rgb(243, 244, 246)'};
	transition-property: all;
	transition-duration: 0.5s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
