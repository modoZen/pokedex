import { useAppSelector } from '../../store';
import {
	NextButtonStyled,
	PageButtonStyled,
	PageButtonStyledWrapper,
	PaginationStyled,
	PrevButtonStyled,
} from './PaginationComponent.styled';
import { PrevArrow } from '../Icons/PrevArrow/PrevArrow';
import { NextArrow } from '../Icons/NextArrow/NextArrow';
import { usePagination } from '../../hooks/usePagination';

export const PaginationComponent = () => {
	const isDarkMode = useAppSelector(state => state.uiState.isDarkMode);
	const { totalPages, prev, next, page, handlePageChange } = usePagination();

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
