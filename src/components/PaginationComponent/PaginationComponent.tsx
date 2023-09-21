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
	const dispatch = useAppDispatch();

	const [page, setPage] = useState(0);

	const cant = 18;
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
		>
			{prev && (
				<PrevButtonStyled>
					<PrevArrow />
					Anterior
				</PrevButtonStyled>
			)}

			<PageButtonStyledWrapper>
				<PageButtonStyled
					activeClassName='activeClassName'
					inactiveClassName='inactiveClassName'
				/>
			</PageButtonStyledWrapper>

			{next && (
				<NextButtonStyled>
					Siguiente
					<NextArrow />
				</NextButtonStyled>
			)}
		</PaginationStyled>
	);
};
