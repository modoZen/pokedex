import styled from 'styled-components';

interface Props {
	$isDarkMode: boolean;
}

export const HeaderStyled = styled.header<Props>`
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: ${({ $isDarkMode }) =>
		$isDarkMode ? '#1f2937f2' : '#e5e7ebf2'};
	padding: 0.75rem 1rem;
	transition-property: all;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const HeaderContentStyled = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 640px) {
		max-width: 640px;
	}
	@media (min-width: 768px) {
		max-width: 768px;
	}
	@media (min-width: 1024px) {
		max-width: 1024px;
	}
	@media (min-width: 1280px) {
		max-width: 1280px;
	}
	@media (min-width: 1536px) {
		max-width: 1536px;
	}
`;

export const HeaderLogoStyled = styled.h1`
	margin: 0;
	font-size: 2.25rem;
	font-weight: bold;
	color: #feca1b;
`;
