import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchPokemonData, setPage } from '../store/pokemonReducer';

export const usePagination = () => {
	const { count, prev, next, page } = useAppSelector(
		state => state.pokemonState,
	);
	const dispatch = useAppDispatch();

	const cant = 30;
	const offset = cant * page;

	const totalPages = Math.ceil(count / cant);

	useEffect(() => {
		dispatch(fetchPokemonData(cant, offset));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const handlePageChange = (newPage: number) => {
		dispatch(setPage(newPage));
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return {
		totalPages,
		page,
		prev,
		next,
		handlePageChange,
	};
};
