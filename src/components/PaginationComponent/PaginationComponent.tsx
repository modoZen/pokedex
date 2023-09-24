import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchPokemonData } from '../../store/pokemonReducer';
import {
	NextButtonStyled,
	PageButtonStyled,
	PageButtonStyledWrapper,
	PaginationStyled,
	PrevButtonStyled,
} from './PaginationComponent.styled';
import { PrevArrow } from '../Icons/PrevArrow/PrevArrow';
import { NextArrow } from '../Icons/NextArrow/NextArrow';

export const PaginationComponent = () => {
	const { count, prev, next } = useAppSelector(state => state.pokemonState);
	const { isDarkMode } = useAppSelector(state => state.uiState);
	const dispatch = useAppDispatch();

	const [page, setPage] = useState(0);

	const cant = 30;
	const offset = cant * page;

	const totalPages = Math.floor(count / cant);

	useEffect(() => {
		dispatch(fetchPokemonData(cant, offset));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	return (
		<PaginationStyled
			currentPage={page}
			setCurrentPage={handlePageChange}
			totalPages={totalPages}
			edgePageCount={3}
			middlePagesSiblingCount={2}
			truncableClassName='truncableClassName'
			$isDarkMode={isDarkMode}
		>
			{prev && (
				<PrevButtonStyled $isDarkMode={isDarkMode}>
					<PrevArrow />
					Anterior
				</PrevButtonStyled>
			)}

			<PageButtonStyledWrapper>
				<PageButtonStyled
					activeClassName='activeClassName'
					inactiveClassName='inactiveClassName'
					$isDarkMode={isDarkMode}
				/>
			</PageButtonStyledWrapper>

			{next && (
				<NextButtonStyled $isDarkMode={isDarkMode}>
					Siguiente
					<NextArrow />
				</NextButtonStyled>
			)}
		</PaginationStyled>
	);
};
