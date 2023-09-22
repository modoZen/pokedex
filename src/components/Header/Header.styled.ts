import styled from 'styled-components';

export const HeaderStyled = styled.header`
	position: sticky;
	top: 0;
	z-index: 20;
	background-color: #e5e7ebf2;
	padding: 0.75rem 1rem;
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

// export const HeaderContainer = styled.h1`
// 	text-align: center;
// 	font-weight: bold;
// 	padding: 0.75rem 0;
// 	color: #feca1b;
// 	font-size: 2.25rem;
// `;
