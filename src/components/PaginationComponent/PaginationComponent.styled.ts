import {
	NextButton,
	PageButton,
	Pagination,
	PrevButton,
} from 'react-headless-pagination';
import styled from 'styled-components';

interface Props {
	$isDarkMode: boolean;
}

export const PaginationStyled = styled(Pagination)<Props>`
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
		color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
	}
`;

export const PageButtonStyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	gap: 0.25rem;
	@media only screen and (max-width: 810px) {
		display: none;
	}
`;

export const PageButtonStyled = styled(PageButton)<Props>`
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 9999px;
	color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(243, 244, 246)' : 'rgb(107, 114, 128)'};
	transition-property: all;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

	&.activeClassName {
		color: white;
		background-color: #feca1b;
	}

	&.inactiveClassName {
		color: ${({ $isDarkMode }) =>
			$isDarkMode ? 'rgb(243, 244, 246)' : 'rgb(107, 114, 128)'};
		background-color: ${({ $isDarkMode }) =>
			$isDarkMode ? 'rgb(75 ,85 ,99)' : ' #e5e7eb'};

		&:hover {
			background-color: #feca1b99;
		}
	}
`;

export const PrevButtonStyled = styled(PrevButton)<Props>`
	display: flex;
	align-items: center;
	margin-right: 0.5rem;
	cursor: pointer;
	background-color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'};
	color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(243, 244, 246)' : 'rgb(107, 114, 128)'};
	border-radius: 0.5rem;
	padding: 0.5rem 0.75rem;
	border-width: 0;
	font-size: 14px;
	transition-property: all;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const NextButtonStyled = styled(NextButton)<Props>`
	display: flex;
	align-items: center;
	margin-left: 0.5rem;
	cursor: pointer;
	background-color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(75, 85, 99)' : 'rgb(229, 231, 235)'};
	color: ${({ $isDarkMode }) =>
		$isDarkMode ? 'rgb(243, 244, 246)' : 'rgb(107, 114, 128)'};
	border-radius: 0.5rem;
	padding: 0.5rem 0.75rem;
	border-width: 0;
	font-size: 14px;
	transition-property: all;
	transition-duration: 0.15s;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;
