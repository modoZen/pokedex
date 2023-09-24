import styled from 'styled-components';

export const PokemonListContainer = styled.div`
	margin: 0 auto;
	max-width: 1700px;
	/* width: 95%; */
	display: grid;
	/* grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr)); */
	grid-template-columns: repeat(auto-fill, 15.625rem);
	justify-content: center;
	grid-auto-rows: 16.875rem;
	/* justify-content: center; */
	/* display: flex;
	flex-wrap: wrap; */
	/* justify-content: center;
	align-items: center; */
	column-gap: 1.25rem;
	row-gap: 2rem;
	padding: 1.25rem 1rem;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-property: all;
	transition-duration: 0.5s;
`;
