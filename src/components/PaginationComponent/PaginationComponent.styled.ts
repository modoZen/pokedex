import {
	NextButton,
	PageButton,
	Pagination,
	PrevButton,
} from 'react-headless-pagination';
import styled from 'styled-components';

export const PaginationStyled = styled(Pagination)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: auto;
	margin-left: auto;
	height: 2.5rem;
	width: 100%;
	max-width: 1536px;
	user-select: none;
	padding: 2.5rem 1.25rem;
	list-style: none;

	.truncableClassName {
		width: 2.5rem;
		padding-right: 0.125rem;
		padding-left: 0.125rem;
		text-align: center;
		color: black;
	}
`;

export const PageButtonStyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	gap: 0.25rem;
	@media only screen and (max-width: 680px) {
		display: none;
	}
`;

export const PageButtonStyled = styled(PageButton)`
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 9999px;
	background-color: #e5e7eb;
	transition-property: all;
	transition-duration: 150ms;

	&.activeClassName {
		color: white;
		background-color: #feca1b;
	}

	&.inactiveClassName {
		color: rgb(107, 114, 128);
	}
`;

export const PrevButtonStyled = styled(PrevButton)`
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
	cursor: pointer;
	background-color: #e5e7eb;
	border-radius: 0.5rem;
	padding: 0.5rem 0.75rem;
	color: rgb(107, 114, 128);
	border-width: 0;
	font-size: 14px;
`;

export const NextButtonStyled = styled(NextButton)`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
	cursor: pointer;
	background-color: #e5e7eb;
	border-radius: 0.5rem;
	padding: 0.5rem 0.75rem;
	color: rgb(107, 114, 128);
	border-width: 0;
	font-size: 14px;
`;
